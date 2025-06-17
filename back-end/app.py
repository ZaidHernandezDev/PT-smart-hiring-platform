import pandas as pd
import joblib
from fastapi import FastAPI, Depends, HTTPException
import numpy as np
from fastapi.middleware.cors import CORSMiddleware  # 👈 importa el middleware


from sqlalchemy.orm import Session

from database.database import get_db
from schemas.candidate import Candidate
from schemas.create_candidate import CandidateCreate
from schemas.input_candidate import InputData

app = FastAPI()
model = joblib.load('entrenamiento.pkl') #cargando el modelo

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

RESPUESTA = {
    1 : "Candidato Aceptado", 
    0 : "Candidato No Apto"
}

# Create candidate
@app.post("/candidates/")
def create_candidate(candidate: CandidateCreate, db: Session = Depends(get_db)):
    
    #Extraer los datos únicos para analizar. Se extraen del objeto candidate. 
    data_to_analize = InputData(
        teamwork = candidate.teamwork,
        time_management = candidate.time_management,
        problem_solving = candidate.problem_solving,
        adaptability = candidate.adaptability,
        communication = candidate.communication,
        autonomy = candidate.autonomy,
        english_level = candidate.english_level,
        html_css = candidate.html_css,
        javascript = candidate.javascript,
        frameworks = candidate.frameworks,
        responsive_desing = candidate.responsive_design,
        git = candidate.git,
        perfomance_optimization = candidate.performance_optimization,
        ui_ux = candidate.ui_ux,
        api_integration = candidate.api_integration,
        debugging = candidate.debugging,
        testing = candidate.testing)
    
    print(data_to_analize.dict())
    
    #Una vez que se extraen los datos, los convertimos a un DataFrame para hacer la predicción. 
    informacion_postulante = pd.DataFrame([data_to_analize.dict()])
    prediction = model.predict(informacion_postulante)
    
    #Se crea una instancia de la tabla candidate para guardar un nuevo registro
    db_candidate = Candidate(**candidate.dict())
    #Se actualiza el campo result con la predicción
    db_candidate.result = int(prediction[0])
    db.add(db_candidate)
    db.commit()
    db.refresh(db_candidate)
    return {"prediction": RESPUESTA.get(int(prediction[0]))}

# Get all candidates
@app.get("/candidates/")
def get_candidates(db: Session = Depends(get_db)):
    return db.query(Candidate).all()

# Update result
@app.put("/candidates/{candidate_id}/result")
def update_result(candidate_id: int, result: int, db: Session = Depends(get_db)):
    candidate = db.query(Candidate).filter(Candidate.id == candidate_id).first()
    if not candidate:
        raise HTTPException(status_code=404, detail="Candidate not found")
    candidate.result = result
    db.commit()
    return {"message": f"Result updated to {result}"}

# Obtener estadisticas
@app.get("/candidates/stats")
def get_candidate_stats(db: Session = Depends(get_db)):
    total = db.query(Candidate).count()
    accepted = db.query(Candidate).filter(Candidate.result == 1).count()
    rejected = db.query(Candidate).filter(Candidate.result == 0).count()
    return {
        "total_candidates": total,
        "accepted_candidates": accepted,
        "rejected_candidates": rejected
    }

# resumen de los datos del usuario
@app.get("/candidates/summary")
def get_candidate_summary(db: Session = Depends(get_db)):
    candidates = db.query(
        Candidate.id,
        Candidate.full_name,
        Candidate.age,
        Candidate.phone,
        Candidate.email,
        Candidate.result
    ).all()

    return [
        {
            "id": c[0],
            "full_name": c[1],
            "age": c[2],
            "phone": c[3],
            "email": c[4],
            "result": c[5]
        } for c in candidates
    ]

# Obtener candidato por ID
@app.get("/candidates/{candidate_id}")
def get_candidate(candidate_id: int, db: Session = Depends(get_db)):
    candidate = db.query(Candidate).filter(Candidate.id == candidate_id).first()
    if not candidate:
        raise HTTPException(status_code=404, detail="Candidato no encontrado")
    return candidate

from sqlalchemy import create_engine, Column, Integer, String, DateTime
from datetime import datetime
from pydantic import BaseModel
from sqlalchemy.ext.declarative import declarative_base

from database.database import engine

Base = declarative_base()
Base.metadata.create_all(bind=engine)

class Candidate(Base):
    __tablename__ = "candidates"

    id = Column(Integer, primary_key=True, index=True)

    # Step 1: Personal Information
    full_name = Column(String)
    age = Column(Integer)
    location = Column(String)
    availability = Column(String)
    start_date = Column(String)

    # Step 2: Contact Information
    email = Column(String)
    phone = Column(String)
    remote_experience = Column(String)
    portfolio_url = Column(String)
    salary_expectation = Column(String)

    # Step 3: Soft Skills
    teamwork = Column(Integer)
    time_management = Column(Integer)
    problem_solving = Column(Integer)
    adaptability = Column(Integer)
    communication = Column(Integer)
    autonomy = Column(Integer)
    english_level = Column(Integer)

    # Step 4: Technical Skills
    html_css = Column(Integer)
    javascript = Column(Integer)
    frameworks = Column(Integer)  # React, Layouting, Vue.js or Angular
    responsive_design = Column(Integer)
    git = Column(Integer)
    performance_optimization = Column(Integer)
    ui_ux = Column(Integer)
    api_integration = Column(Integer)
    debugging = Column(Integer)
    testing = Column(Integer)

    result = Column(Integer)  # 1 = suitable, 0 = not suitable
    created_at = Column(DateTime, default=datetime.utcnow)

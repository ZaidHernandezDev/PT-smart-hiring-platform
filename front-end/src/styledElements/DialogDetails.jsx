import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const Label = styled.span`
  font-weight: bold;
  color: #333;
`;

const Info = styled.p`
  ${({ $fullWidth }) => ($fullWidth ? 'grid-column: 1/-1;' : '')}
  margin: 0.25rem 0;
  font-size: 0.95rem;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1rem;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h3`
  grid-column: 1/-1;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  color: #444;
  border-bottom: 0.125rem solid #ccc;
  padding-bottom: 0.25rem;
  text-align: center;
`;

const ResultText = styled.p`
  margin-top: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => (props.recommended ? '#2e7d32' : '#c62828')};
`;

export default function DialogDetails({ open, handleClose, selectedUser }) {

  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>Detalles del usuario</DialogTitle>
      <DialogContent dividers>
        {selectedUser ? (
          <>
            {/* Información personal */}
            <Section >
              <SectionTitle>Información Personal</SectionTitle>
              <Info>
                <Label>Nombre:</Label> {selectedUser.full_name}
              </Info>
              <Info>
                <Label>Edad:</Label> {selectedUser.age}
              </Info>
              <Info>
                <Label>Ubicación:</Label> {selectedUser.location}
              </Info>
              <Info>
                <Label>Disponibilidad:</Label> {selectedUser.availability}
              </Info>
              <Info>
                <Label>Fecha de inicio:</Label> {selectedUser.start_date}
              </Info>
            </Section>

            {/* Información de contacto */}
            <Section >
              <SectionTitle>Contacto</SectionTitle>
              <Info>
                <Label>Email:</Label> {selectedUser.email}
              </Info>
              <Info>
                <Label>Teléfono:</Label> {selectedUser.phone}
              </Info>
              <Info>
                <Label>Experiencia remota:</Label> {selectedUser.remote_experience}
              </Info>
              <Info>
                <Label>Expectativa salarial:</Label> {selectedUser.salary_expectation}
              </Info>
              <Info $fullWidth={true}>
                <Label>Portafolio:</Label>{' '}
                {selectedUser.portfolio_url ? (
                  <a href={selectedUser.portfolio_url} target="_blank" rel="noopener noreferrer">
                    {selectedUser.portfolio_url}
                  </a>
                ) : (
                  'No especificado'
                )}
              </Info>
            </Section>

            {/* Soft Skills */}
            <Section >
              <SectionTitle>Habilidades Blandas</SectionTitle>
              <Info>
                <Label>Trabajo en equipo:</Label> {selectedUser.teamwork}
              </Info>
              <Info>
                <Label>Gestión del tiempo:</Label> {selectedUser.time_management}
              </Info>
              <Info>
                <Label>Resolución de problemas:</Label> {selectedUser.problem_solving}
              </Info>
              <Info>
                <Label>Adaptabilidad:</Label> {selectedUser.adaptability}
              </Info>
              <Info>
                <Label>Comunicación:</Label> {selectedUser.communication}
              </Info>
              <Info>
                <Label>Autonomía:</Label> {selectedUser.autonomy}
              </Info>
              <Info>
                <Label>Nivel de inglés:</Label> {selectedUser.english_level}
              </Info>
            </Section>

            {/* Technical Skills */}
            <Section >
              <SectionTitle>Habilidades Técnicas</SectionTitle>
              <Info>
                <Label>HTML/CSS:</Label> {selectedUser.html_css}
              </Info>
              <Info>
                <Label>JavaScript:</Label> {selectedUser.javascript}
              </Info>
              <Info>
                <Label>Frameworks:</Label> {selectedUser.frameworks}
              </Info>
              <Info>
                <Label>Diseño responsivo:</Label> {selectedUser.responsive_design}
              </Info>
              <Info>
                <Label>Git:</Label> {selectedUser.git}
              </Info>
              <Info>
                <Label>Optimización de rendimiento:</Label> {selectedUser.performance_optimization}
              </Info>
              <Info>
                <Label>Diseño UI/UX:</Label> {selectedUser.ui_ux}
              </Info>
              <Info>
                <Label>Integración de APIs:</Label> {selectedUser.api_integration}
              </Info>
              <Info>
                <Label>Depuración:</Label> {selectedUser.debugging}
              </Info>
              <Info>
                <Label>Pruebas:</Label> {selectedUser.testing}
              </Info>
            </Section>

            {/* Resultado final */}
            <Section >
              <SectionTitle>Evaluación Final</SectionTitle>
              <ResultText recommended={selectedUser.result === 1}>{selectedUser.result === 1 ? '✅ Recomendado' : '❌ No recomendado'}</ResultText>
            </Section>
          </>
        ) : (
          <p>Cargando información del candidato...</p>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
}

import styled from "styled-components";

const RobotCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: gold;
  flex-wrap: wrap;
  img {
    height: 120px;
  }
`;

const Nombre = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: red;
`;

const Caracteristicas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: violet;
  font-size: 15px;
`;

const Robot = ({
  robot: { name, imagen, velocidad, resistencia, creacion },
}) => {
  return (
    <>
      <RobotCard>
        <Nombre>{name}</Nombre>
        <img src={imagen} alt="imagen robot" />
        <Caracteristicas>
          <p>Velocidad:{velocidad}</p>
          <p>Resistencia:{resistencia}</p>
          <p>Fecha de creacion:{creacion}</p>
        </Caracteristicas>
      </RobotCard>
    </>
  );
};

export default Robot;

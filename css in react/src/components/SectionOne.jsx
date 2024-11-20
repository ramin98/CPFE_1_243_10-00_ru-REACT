import camera from "../assets/camera.png";
import cameraTwo from "../assets/camera2.png";
import { data } from "../assets/data/data";
import styled from "styled-components";
import ListItem from "./ListItem";

function SectionOne() {
  return (
    <Section>
      <Header>О курсе</Header>
      <DescriptionContainer>
        <DescriptionTextContainer>
          <DescriptionTextParagraph>
            Порой фильмы устроены сложнее четырёхтомных романов. Но читать книги
            учат со школы, а смотреть кино — нет. При этом без подготовки бывает
            трудно получить от просмотра удовольствие.
          </DescriptionTextParagraph>
          <DescriptionTextParagraph>
            На курсе из 8 занятий научимся быть осознанными зрителями.
            Познакомимся с этапами кинопроизводства и узнаем, как смотреть кино
            глазами сценариста, режиссёра и монтажёра. Разберёмся в особенностях
            жанров и рассмотрим важнейшие картины, от «Гражданина Кейна» до
            «Матрицы».
          </DescriptionTextParagraph>
        </DescriptionTextContainer>
        <DescriptionImage src={camera} alt="camera" />
      </DescriptionContainer>
      <DuringsContainer>
        <DuringsImage src={cameraTwo} alt="camera" />
        <DuringsList>
          {data.map((item) => (
            <ListItem key={item.id} {...item} />
          ))}
        </DuringsList>
      </DuringsContainer>
    </Section>
  );
}

export default SectionOne;

const Section = styled.section`
  padding: 91px 124px 157px 124px;
`;

const Header = styled.h1`
  font-size: 55px;
  font-weight: 700;
  line-height: 55.76px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
`;

const DescriptionTextContainer = styled.div`
  width: 662px;
`;

const DescriptionTextParagraph = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;

  &:nth-child(2) {
    margin-top: 10px;
  }
`;

const DescriptionImage = styled.img``;

const DuringsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 94px;

`;

const DuringsImage = styled.img``;

const DuringsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 95px;
  margin-left: 135px;
`;

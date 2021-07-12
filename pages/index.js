import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function ProfileSidebar(props) {
  console.log(props);
  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
    </Box>
  );
}

export default function Home() {
  const user = "frgiovanna";
  const friends = ["laura-martins", "arthurMSA", "FagnerRumenigg"];

  var motivationalPhrases = [
    "Quem se apaixona por si mesmo não tem rivais",
    "A sorte vem sempre ao seu encontro",
    "Um dia sem sorrisos é um dia perdido",
    "O homem procura a paz,mas ao mesmo tempo anseia pela guerra.",
  ];
  var randomPhrase =
    motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={user} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a), {user}</h1>
            <p style={{ color: "#999999" }}><b>Sorte do dia: </b>{randomPhrase}</p>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({friends.length})
            </h2>

            <ul>
              {friends.map((item) => {
                return (
                  <li>
                    <a href={`/users/${item}`} key={item}>
                      <img src={`https://github.com/${item}.png`} />
                      <span>{item}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}

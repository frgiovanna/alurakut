import React from "react";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import ImageList from "../src/components/ImageList/ImageList";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
  AlurakutProfileSidebarMenuDefault,
} from "../src/lib/AlurakutCommons";

function ProfileSidebar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const user = "frgiovanna";
  const [communities, setCommunities] = React.useState([
    {
      id: "1",
      title: "Eu odeio acordar cedo",
      image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
    },
  ]);
  const friends = [
    {
      id: "1",
      title: "Olivia Rodrigo",
      image:
        "https://studiosol-a.akamaihd.net/tb/letras-blog/wp-content/uploads/2021/01/0c829ba-ErlVMlTW4AEUmSO-1024x678.jpg",
    },
    {
      id: "2",
      title: "Billie Eilish",
      image:
        "https://static1.purebreak.com.br/articles/1/96/98/1/@/382029-billie-eilish-conta-em-entrevista-que-ta-diapo-2.jpg",
    },
    {
      id: "2",
      title: "Melanie Martinez",
      image:
        "  https://portalfamosos.com.br/wp-content/uploads/2020/07/1-Imagem-23.gif",
    },
  ];

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
      <AlurakutMenu githubUser={user} />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={user} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a), {user}</h1>
            <p style={{ color: "#999999" }}>
              <b>Sorte do dia: </b>
              {randomPhrase}
            </p>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);

                const community = {
                  id: new Date().toISOString(),
                  title: formData.get("title"),
                  image: formData.get("image"),
                };
                const updatedCommunities = [...communities, community];
                setCommunities(updatedCommunities);
              }}
            >
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>Criar comunidade</button>
            </form>
            <br />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ImageList title="Amigos" list={friends} />
          <ImageList title="Comunidades" list={communities} />
        </div>
      </MainGrid>
    </>
  );
}

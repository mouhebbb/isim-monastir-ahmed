import React from "react";
import Login from "./Login";

const Content = ({ selectedItem }) => {
  // Render different content based on the selected item
  const renderContent = () => {
    switch (selectedItem) {
      case "item1":
        return (
          <div>
            <img src="./unnamed.png" width={600} height={400} alt="isimm" />
            <p>
              L'Institut Supérieur d'Informatique et de Mathématiques de
              l’Université de Monastir (ISIMM) est créé par le décret n° 1623 du
              09 juillet 2002, est un établissement d’enseignement supérieur
              scientifique, public, placé sous la tutelle du Ministère de
              l'Enseignement Supérieur de la Recherche Scientifique. Dans un
              premier temps ses formations ont été axées sur les métiers de
              l'Informatique et de ses applications, des Mathématiques et ses
              applications (Modélisation, Statistique). Au fil du temps il s’est
              vu autorisé à diversifier ses formations pour arriver à en
              dispenser toute une panoplie de formations allant de la licence
              aux Mastères de recherche et professionnel en passant par une
              formation d’ingénieurs en électronique. Avec bien sure la
              multiplication des spécialités offertes. En règle générale nos
              formations s’articulent autour de trois départements et d’une
              architecture LMD. Elles ont été enrichies ces dernières années par
              une formation spécifique du diplôme d’ingénieur en électronique.
              La qualité des formations qu'il propose ainsi que leur adéquation
              aux attentes du marché, s'appuient sur l'expérience de ses
              enseignants en matière de formation, expérience concrétisée par
              l’ouverture de l’établissement sur son environnement
              socioéconomique et industriel. Dans le cadre de l’harmonisation du
              système d’enseignement supérieur en Tunisie qui vise à faciliter
              les orientations progressives et à favoriser la mobilité nationale
              et internationale des étudiants. Tisser des liens, c'est la force
              de notre école l’ISIMM propose des offres de formation dans le
              domaine des Sciences et Technologies dans les disciplines
              suivantes : Informatique, Mathématiques et Electronique. Ces
              offres sont régies par trois grands principes : architecture des
              diplômes autour de la Licence, du Mastère et du Doctorat (LMD) la
              mise en place du système de crédits un déroulement des études basé
              sur le semestre et le choix d’Unités d’Enseignements (UE). La
              gouvernance de l’ISIMM est assurée par une direction aidée dans sa
              mission par un dynamique conseil scientifique, une direction des
              études, une direction des stages et une administration quelque peu
              jeune mais dynamique et motivée. Il n’en demeure pas moins que bon
              nombre d’enseignants travaillant dans l’ombre ont contribué sans
              aucun ménagement à la bonne marche de l’ISIMM et à la réussite de
              tous ses projets."{" "}
            </p>
          </div>
        );
      case "item2":
        return (
          <div>
            " L’Institut s’articule autour de trois départements ; Informatique,
            Mathématiques et Technologie. Actuellement le nombre d’enseignants
            permanents est de 26, 18 et 27 respectivement. Les enseignements
            offerts par ces départements pour l’année 2011-2012 sont donnés par
            le tableau ci-après. "
          </div>
        );

      case "login":
        return <div></div>;
      case "home":
        return <div></div>;
      default:
        return <div>Mouheb rss el7aam</div>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default Content;

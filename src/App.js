import { useEffect } from "react";
import "./App.css";

import { HelmetProvider } from "react-helmet-async";

import AllRoutes from "./routes/AllRoutes";
import Loader from "./components/Loader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrRenewal from "./pages/PrRenewal"; // Done Animation
import Citizenship from "./pages/Citizenship"; // Done Animation
import Reconsideration from "./pages/Reconsideration"; // Done Animation
import AdditionalDocument from "./pages/AdditionalDocument";// Done Animation
import ReplyToPflPage from "./pages/ReplyToPflPage";// Done Animation
import LmiaReviewed from "./pages/LmiaReviewed"; // Done Animation
import OpenWorkPermit from "./pages/OpenWorkPermit"; // Done Animation
import AgricultureStreamLmia from "./pages/AgricultureStreamLmia"; // Done Animation
import GlobalStreamLmia from "./pages/GlobalStreamLmia";// Done Animation
import LowWageLmia from "./pages/LowWageLmia";//Done Animation
import BridgingOpenWorkPermitLP from "./pages/BridgingOpenWorkPermitLP"; //Done Animation
import FrancophoneMobilityProgram from "./pages/FrancophoneMobilityProgram"; //Done Animation
import OpenWorkVulnerableLP from "./pages/OpenWorkVulnerableLP"; //Done Animation
import OpenWorkCanadaLP from "./pages/OpenWorkCanadaLP"; // Done Animation
import Pgwp from "./pages/Pgwp"; //Done Animation
import FamilyReunificationSponsorship from "./pages/FamilyReunificationSponsorship";  // Done Animation
import Adoption from "./pages/Adoption"; //Done Animation
import DependentChildren from "./pages/DependentChildren"; //Done Animation
import HumanitarianCompassionate from "./pages/HumanitarianCompassionate"; //Done Animation
import LonelyCanadian from "./pages/LonelyCanadian"; // Done Animation
import ParentsGrandparents from "./pages/ParentsGrandparents"; //Done Animation
import StudentVisa from "./pages/StudentVisa"; //Done Animation
import Orphan from "./pages/Orphan"; //Done  Animation
import InsideCanada from "./pages/InsideCanada"; //Done Animation
import ChangeCollegeProgram from "./pages/ChangeCollegeProgram"; //Done Animation
import VisitorToStudent from "./pages/VisitorToStudent"; //Done Animation
import OutsideCananda from "./pages/OutsideCananda";//Done Animation
import NonSds from "./pages/NonSds"; //Done Animation 
import Sds from "./pages/Sds";  //Done Animation
import StudyPermitMinors from "./pages/StudyPermitMinors"; //Done Animation
import ExtensionsDraft from "./pages/ExtensionsDraft"; //Done Animation
import Flagpoling from "./pages/Flagpoling";  //Done Animation
import RestorationStatusDraft from "./pages/RestorationStatusDraft"; //Done Animation
import SpousalOpenWorkPermit from "./pages/SpousalOpenWorkPermit"; //Done Animation
import CommonLawPartnerPermanent from "./pages/CommonLawPartnerPermanent"; //Done Animation
import CommonLawPartnerTemporary from "./pages/CommonLawPartnerTemporary";  //Done Animation
import Cby from "./pages/Cby"; //not use
import SuperVisa from "./pages/SuperVisa"; //Done Animation
import TemporaryResidentPermitDraft from "./pages/TemporaryResidentPermitDraft"; //Done Animation
import TemporaryResident from "./pages/TemporaryResident";
import VisitorVisa from "./pages/VisitorVisa"; //Done  Animation
import BusinessVisitorVisa from "./pages/BusinessVisitorVisa";//Done one part Animation
import DualIntentVisa from "./pages/DualIntentVisa"; //Done one part Animation
import CanadianExperienceClass from "./pages/CanadianExperienceClass"; //Done Animation
import FederalSkilledTradesProgram from "./pages/FederalSkilledTradesProgram";//Done Animation
import FederalSkilledWorkerProgram from "./pages/FederalSkilledWorkerProgram"; // Done Animation
import FrenchTargetedDraw from "./pages/FrenchTargetedDraw"; //Done Animation Meta
import HealthcareTargetedDraw from "./pages/HealthcareTargetedDraw"; //Done Animation
import StemTargetedDraw from "./pages/StemTargetedDraw"; //Done Animation
import TradeOccupationTargetedDraw from "./pages/TradeOccupationTargetedDraw"; //Done Animation
import TransportOccupationTargetedDraw from "./pages/TransportOccupationTargetedDraw"; //Done Animation
import PilotPrograms from "./pages/PilotPrograms"; //Done Animation
import AgriFoodPilotProgram from "./pages/AgriFoodPilotProgram"; //Done Animation
import Rnip from "./pages/Rnip"; //Done Animation
import Pnp from "./pages/Pnp"; //Done Animation
import BcPnp from "./pages/BcPnp"; //Done Animation
import EntryLevelSemiSkilled from "./pages/EntryLevelSemiSkilled";//Done no yet
import HealthAuthoritiesStream from "./pages/HealthAuthoritiesStream"; //Done Animation
import InternationalGraduateProgram from "./pages/InternationalGraduateProgram"; //Done Animation
import InternationalPostGraduateProgram from "./pages/InternationalPostGraduateProgram"; //Done Animation
import PrioritiesProgram from "./pages/PrioritiesProgram"; //Done Animation
import SkilledWorkerStream from "./pages/SkilledWorkerStream"; //Done Animation
import InCaregiverProgramLP from "./pages/InCaregiverProgramLP"; //Done Animation
import WorkPermit from "./pages/WorkPermit"; //Done Animation
import PathwaysForCaregiver from "./pages/PathwaysForCaregiver"; //Done Animation
import PermanentResidencePathwaysCaregiversLP from "./pages/PermanentResidencePathwaysCaregiversLP"; //Done Animation
import NewsDetails from "./pages/NewsDetails";
import News from "./pages/News";
import Odometer from "./components/Odometer";


function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    let handleBackgroundColor = () => {
      if (window.location.pathname === '/dash/panel/overwrite') {
        document.body.style.backgroundColor = 'rgb(241, 241, 241)'; 
      } else {
        document.body.style.backgroundColor = 'white';
      }
    };
    handleBackgroundColor();
    window.addEventListener('popstate', handleBackgroundColor);
    return () => {
      window.removeEventListener('popstate', handleBackgroundColor);
      document.body.style.backgroundColor = 'white';
    };
  }, []);

  return (
    <div className="App">
  
      <ToastContainer />

      <Loader />   
      <HelmetProvider>
        <AllRoutes />
      </HelmetProvider>
    </div>
  );
}

export default App;

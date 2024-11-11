import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BCPNPCalculator from "../pages/BCPNPCalculator";
import FederalSkilled from "../pages/FederalSkilled";
import ExpressEntry from "../pages/ExpressEntry";
import PermanentResidency from "../pages/PermanentResidency";
import CategoryBased from "../pages/CategoryBased";
import NotFoundPage from "../pages/NotFoundPage";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import CLBILETSCalculator from "../pages/CLBILETSCalculator";
import PreviousDrawHistory from "../pages/PreviousDrawHistory";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import MoreServices from "../pages/MoreServices";
import Admin from "../pages/Admin";

import TemporaryResident from "../pages/TemporaryResident";
import SkilledWorkerStream from "../pages/SkilledWorkerStream";
import PrioritiesProgram from "../pages/PrioritiesProgram";
import InternationalPostGraduateProgram from "../pages/InternationalPostGraduateProgram";
import InternationalGraduateProgram from "../pages/InternationalGraduateProgram";
import HealthAuthorityStream from "../pages/HealthAuthoritiesStream";
import EntryLevelSemiSkilled from "../pages/EntryLevelSemiSkilled";
import BcPnp from "../pages/BcPnp";
import Pnp from "../pages/Pnp";
import Rnip from "../pages/Rnip";
import AgriFoodPilotProgram from "../pages/AgriFoodPilotProgram";
import PilotPrograms from "../pages/PilotPrograms";
import TransportOccupationTargetedDraw from "../pages/TransportOccupationTargetedDraw";
import TradeOccupationTargetedDraw from "../pages/TradeOccupationTargetedDraw";
import StemTargetedDraw from "../pages/StemTargetedDraw";
import FrenchTargetedDraw from "../pages/FrenchTargetedDraw";
import FederalSkilledWorkerProgram from "../pages/FederalSkilledWorkerProgram";
import FederalSkilledTradesProgram from "../pages/FederalSkilledTradesProgram";
import CanadianExperienceClass from "../pages/CanadianExperienceClass";
import DualIntentVisa from "../pages/DualIntentVisa";
import BusinessVisitorVisa from "../pages/BusinessVisitorVisa";
import VisitorVisa from "../pages/VisitorVisa";
import TemporaryResidentPermitDraft from "../pages/TemporaryResidentPermitDraft";
import SuperVisa from "../pages/SuperVisa";
import Cby from "../pages/Cby";  
import CommonLawPartnerTemporary from "../pages/CommonLawPartnerTemporary";
import CommonLawPartnerPermanent from "../pages/CommonLawPartnerPermanent";
import CommonLawPartnerInternational from "../pages/CommonLawPartnerInternational";
import SpousalOpenWorkPermit from "../pages/SpousalOpenWorkPermit";
import RestorationStatusDraft from "../pages/RestorationStatusDraft";
import Flagpoling from "../pages/Flagpoling";
import ExtensionsDraft from "../pages/ExtensionsDraft";
import StudyPermitMinors from "../pages/StudyPermitMinors";
import Sds from "../pages/Sds";
import NonSds from "../pages/NonSds";
import OutsideCananda from "../pages/OutsideCananda";
import VisitorToStudent from "../pages/VisitorToStudent";
import ChangeCollegeProgram from "../pages/ChangeCollegeProgram";
import InsideCanada from "../pages/InsideCanada";
import StudentVisa from "../pages/StudentVisa";
import ParentsGrandparents from "../pages/ParentsGrandparents";
import Orphan from "../pages/Orphan";
import LonelyCanadian from "../pages/LonelyCanadian";
import HumanitarianCompassionate from "../pages/HumanitarianCompassionate";
import DependentChildren from "../pages/DependentChildren";
import Adoption from "../pages/Adoption";
import FamilyReunificationSponsorship from "../pages/FamilyReunificationSponsorship";
import Pgwp from "../pages/Pgwp";
import OpenWorkCanadaLP from "../pages/OpenWorkCanadaLP";
import OpenWorkVulnerableLP from "../pages/OpenWorkVulnerableLP";
import FrancophoneMobilityProgram from "../pages/FrancophoneMobilityProgram";
import BridgingOpenWorkPermitLP from "../pages/BridgingOpenWorkPermitLP";
import LowWageLmia from "../pages/LowWageLmia";
import GlobalStreamLmia from "../pages/GlobalStreamLmia";
import AgricultureStreamLmia from "../pages/AgricultureStreamLmia";
import OpenWorkPermit from "../pages/OpenWorkPermit";
import LmiaReviewed from "../pages/LmiaReviewed";
import ReplyToPflPage from "../pages/ReplyToPflPage";
import AdditionalDocument from "../pages/AdditionalDocument";
import Reconsideration from "../pages/Reconsideration";
import Citizenship from "../pages/Citizenship";
import PrRenewal from "../pages/PrRenewal";
import InCaregiverProgramLP from "../pages/InCaregiverProgramLP";
import PathwaysForCaregiver from "../pages/PathwaysForCaregiver";
import PermanentResidencePathwaysCaregiversLP from "../pages/PermanentResidencePathwaysCaregiversLP";
import News from "../pages/News";
import NewsDetails from "../pages/NewsDetails";
import Search from "../pages/Search";
import WorkPermit from "../pages/WorkPermit";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import Immigration from "../pages/Immigration";
import HealthcareTargetedDraw from "../pages/HealthcareTargetedDraw";
import SpouseInland from "../pages/SpouseInland";
import SpouseOutland from "../pages/SpouseOutland";
import SpouseCommonLawSpon from "../pages/SpouseCommonLawSpon";
import SameSex from "../pages/SameSex";
import CategoryBasedExpress from "../pages/CategoryBasedExpress";
import AgricultureandAgriFoodOccu from "../pages/AgricultureandAgriFoodOccu";
import OpenWorkPermitForSpouseInland from "../pages/OpenWorkPermitForSpouseInland";
import Booking from "../pages/Booking";

let AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/bcpnp-calculator" element={<BCPNPCalculator />} />
      <Route path="/federal-skilled" element={<FederalSkilled />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/express-entry" element={<ExpressEntry />} />
      <Route path="/permanent-residency" element={<PermanentResidency />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsDetails />} />
      <Route path="/category-based" element={<CategoryBased />} />
      <Route path="/clb-ilets-calculator" element={<CLBILETSCalculator />} />
      <Route path="/previous-draw-history" element={<PreviousDrawHistory />} />
      <Route
        path="/dash/panel/overwrite"
        element={<PrivateRoute element={Admin} />}
      />
      <Route path="/more-services" element={<MoreServices />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-&-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/skilled-worker-stream" element={<SkilledWorkerStream />} />
      <Route path="/priorities-program" element={<PrioritiesProgram />} />
      <Route
        path="/international-post-graduate-program"
        element={<InternationalPostGraduateProgram />}
      />
      <Route
        path="/international-graduate-program"
        element={<InternationalGraduateProgram />}
      />
      <Route
        path="/health-authority-stream"
        element={<HealthAuthorityStream />}
      />
      <Route
        path="/healthcare-targeted-draw"
        element={<HealthcareTargetedDraw />}
      />
      <Route
        path="/entry-level-semi-skilled"
        element={<EntryLevelSemiSkilled />}
      />
      <Route path="/bc-pnp" element={<BcPnp />} />
      <Route path="/pnp" element={<Pnp />} />
      <Route path="/rnip" element={<Rnip />} />
      <Route
        path="/agri-food-pilot-program"
        element={<AgriFoodPilotProgram />}
      />
      <Route path="/pilot-programs" element={<PilotPrograms />} />
      <Route
        path="/transport-occupation-targeted-draw"
        element={<TransportOccupationTargetedDraw />}
      />
      <Route
        path="/trade-occupation-targeted-draw"
        element={<TradeOccupationTargetedDraw />}
      />
      <Route path="/stem-targeted-draw" element={<StemTargetedDraw />} />
      <Route path="/french-targeted-draw" element={<FrenchTargetedDraw />} />
      <Route
        path="/federal-skilled-worker-program"
        element={<FederalSkilledWorkerProgram />}
      />
      <Route
        path="/federal-skilled-trades-program"
        element={<FederalSkilledTradesProgram />}
      />
      <Route
        path="/canadian-experience-class"
        element={<CanadianExperienceClass />}
      />
      <Route path="/dual-intent-visa" element={<DualIntentVisa />} />
      <Route path="/business-visitor-visa" element={<BusinessVisitorVisa />} />
      <Route path="/visitor-visa" element={<VisitorVisa />} />
      <Route path="/temporary-resident" element={<TemporaryResident />} />
      <Route
        path="/temporary-resident-permit-draft"
        element={<TemporaryResidentPermitDraft />}
      />
      <Route path="/super-visa" element={<SuperVisa />} />
      <Route path="/cby" element={<Cby />} /> {/* not use */}
      <Route
        path="/common-law-partner-temporary"
        element={<CommonLawPartnerTemporary />}
      />
      <Route
        path="/common-law-partner-permanent"
        element={<CommonLawPartnerPermanent />}
      />
      <Route
        path="/common-law-partner-international"
        element={<CommonLawPartnerInternational />}
      />
      <Route
        path="/spouse-common-law-sponsership"
        element={<SpouseCommonLawSpon />}
      />
      <Route
        path="/restoration-status-draft"
        element={<RestorationStatusDraft />}
      />
      <Route
        path="/spousal-open-work-permit"
        element={<SpousalOpenWorkPermit />}
      />
      <Route
        path="/open-work-permit-for-spouse-inland"
        element={<OpenWorkPermitForSpouseInland />}
      />
      <Route path="/flagpoling" element={<Flagpoling />} />
      <Route path="/extensions-draft" element={<ExtensionsDraft />} />
      <Route path="/study-permit-minors" element={<StudyPermitMinors />} />
      <Route path="/sds" element={<Sds />} />
      <Route path="/non-sds" element={<NonSds />} />
      <Route path="/outside-canada" element={<OutsideCananda />} />
      <Route path="/visitor-to-student" element={<VisitorToStudent />} />
      <Route
        path="/change-college-program"
        element={<ChangeCollegeProgram />}
      />
      <Route path="/inside-canada" element={<InsideCanada />} />
      <Route path="/student-visa" element={<StudentVisa />} />
      <Route path="/ParentsGrandparents" element={<ParentsGrandparents />} />
      <Route path="/orphan" element={<Orphan />} />
      <Route path="/lonely-canadian" element={<LonelyCanadian />} />
      <Route
        path="/humanitarian-compassionate"
        element={<HumanitarianCompassionate />}
      />
      <Route path="/dependent-children" element={<DependentChildren />} />
      <Route path="/adoption" element={<Adoption />} />
      <Route
        path="/family-reunification-sponsorship"
        element={<FamilyReunificationSponsorship />}
      />
      <Route path="/pgwp" element={<Pgwp />} />
      <Route
        path="/openWork-dependent-children"
        element={<OpenWorkCanadaLP />}
      />
      <Route
        path="/open-work-vulnerable-lp"
        element={<OpenWorkVulnerableLP />}
      />
      <Route
        path="/francophone-mobility-program"
        element={<FrancophoneMobilityProgram />}
      />
      <Route
        path="/bridging-open-work-permit-lp"
        element={<BridgingOpenWorkPermitLP />}
      />
      <Route path="/low-wage-lmia" element={<LowWageLmia />} />
      <Route path="/global-stream-lmia" element={<GlobalStreamLmia />} />
      <Route
        path="/agriculture-stream-lmia"
        element={<AgricultureStreamLmia />}
      />
      <Route path="/open-work-permit" element={<OpenWorkPermit />} />
      <Route path="/lmia-reviewed" element={<LmiaReviewed />} />
      <Route path="/reply-to-pfl-page" element={<ReplyToPflPage />} />
      <Route path="/additional-document" element={<AdditionalDocument />} />
      <Route path="/reconsideration" element={<Reconsideration />} />
      <Route path="/citizenship" element={<Citizenship />} />
      <Route path="/pr-renewal" element={<PrRenewal />} />
      <Route path="/work-permit" element={<WorkPermit />} />
      <Route
        path="/category-based-express"
        element={<CategoryBasedExpress />}
      />
      <Route
        path="/agriculture-agri-food-occupation"
        element={<AgricultureandAgriFoodOccu />}
      />
      <Route
        path="/in-home-caregiver-program-lp"
        element={<InCaregiverProgramLP />}
      />
      <Route
        path="/pathways-for-caregiver"
        element={<PathwaysForCaregiver />}
      />
      <Route
        path="/permanent-residence-pathways-caregivers-lp"
        element={<PermanentResidencePathwaysCaregiversLP />}
      />
      <Route path="/booking" element={<Booking />} />
      <Route path="/spouse-inland" element={<SpouseInland />} />
      <Route path="/spouse-outland" element={<SpouseOutland />} />
      <Route path="/same-sex" element={<SameSex />} />
      <Route path="/immigration-tools" element={<Immigration />} />
      <Route path="/search" element={<Search />} />
      <Route path="/auth/panel/dash/bright" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;

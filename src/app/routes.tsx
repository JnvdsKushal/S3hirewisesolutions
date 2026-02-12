import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Industries } from "./pages/Industries";
import { Careers } from "./pages/Careers";
import { About } from "./pages/About";
import { AIMachineLearning } from "./pages/services/AIMachineLearning";
import { DigitalTransformation } from "./pages/services/DigitalTransformation";
import { SoftwareDevelopment } from "./pages/services/SoftwareDevelopment";
import { CloudServices } from "./pages/services/CloudServices";
import { Cybersecurity } from "./pages/services/Cybersecurity";
import { ITStaffing } from "./pages/services/ITStaffing";
import { DataAnalytics } from "./pages/services/DataAnalytics";
import { MobileDevelopment } from "./pages/services/MobileDevelopment";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "industries",
        Component: Industries,
      },
      {
        path: "careers",
        Component: Careers,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "services/ai-machine-learning",
        Component: AIMachineLearning,
      },
      {
        path: "services/digital-transformation",
        Component: DigitalTransformation,
      },
      {
        path: "services/software-development",
        Component: SoftwareDevelopment,
      },
      {
        path: "services/cloud-services",
        Component: CloudServices,
      },
      {
        path: "services/cybersecurity",
        Component: Cybersecurity,
      },
      {
        path: "services/it-staffing",
        Component: ITStaffing,
      },
      {
        path: "services/data-analytics",
        Component: DataAnalytics,
      },
      {
        path: "services/mobile-development",
        Component: MobileDevelopment,
      },
    ],
  },
]);
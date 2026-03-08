import { createBrowserRouter } from "react-router-dom";
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
element: <Root />,
children: [
{
index: true,
element: <Home />,
},
{
path: "services",
element: <Services />,
},
{
path: "industries",
element: <Industries />,
},
{
path: "careers",
element: <Careers />,
},
{
path: "about",
element: <About />,
},
{
path: "services/ai-machine-learning",
element: <AIMachineLearning />,
},
{
path: "services/digital-transformation",
element: <DigitalTransformation />,
},
{
path: "services/software-development",
element: <SoftwareDevelopment />,
},
{
path: "services/cloud-services",
element: <CloudServices />,
},
{
path: "services/cybersecurity",
element: <Cybersecurity />,
},
{
path: "services/it-staffing",
element: <ITStaffing />,
},
{
path: "services/data-analytics",
element: <DataAnalytics />,
},
{
path: "services/mobile-development",
element: <MobileDevelopment />,
},
{
path: "*",
element: <Home />,
}
],
},
]);

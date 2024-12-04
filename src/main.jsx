import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CampaignsLayout from './Layouts/CampaignsLayout';
import HomeLayout from './Layouts/HomeLayout';
import AddCampaignsLayout from './Layouts/AddCampaignsLayout';
import MyCampaignsLayout from './Layouts/MyCampaignsLayout';
import MyDonationsLayout from './Layouts/MyDonationsLayout';
import LoginLayout from './Layouts/LoginLayout';
import RegisterLayout from './Layouts/RegisterLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>
  },
  {
    path: "campaigns",
    element: <CampaignsLayout></CampaignsLayout>
  },
  {
    path: "addCampaign",
    element: <AddCampaignsLayout></AddCampaignsLayout>
  },
  {
    path: "myCampaign",
    element: <MyCampaignsLayout></MyCampaignsLayout>
  },
  {
    path: "myDonations",
    element: <MyDonationsLayout></MyDonationsLayout>
  },
  {
    path: "login",
    element: <LoginLayout></LoginLayout>
  },
  {
    path: "register",
    element: <RegisterLayout></RegisterLayout>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

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
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './Layouts/PrivateRoute';
import ErrorPage from './Layouts/ErrorPage';
import CampaignDetails from './Layouts/CampaignDetails';
import MainLayout from './MainLayout';
import UpdateCampaign from './Layouts/UpdateCampaign';
import Login from './Components/Login';
import Register from './Components/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch('http://localhost:5000/campaigns6')
      },
      {
        path: "campaigns",
        element: <CampaignsLayout></CampaignsLayout>,
        loader: () => fetch('http://localhost:5000/campaigns')
      },
      {
        path: "addCampaign",
        element: <PrivateRoute>
          <AddCampaignsLayout></AddCampaignsLayout>
        </PrivateRoute>
      },
      {
        path: "myCampaign/:email",
        element: <PrivateRoute>
          <MyCampaignsLayout></MyCampaignsLayout>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/campaigns/${params.email}`)
      },
      {
        path: "myDonations/:email",
        element: <PrivateRoute>
          <MyDonationsLayout></MyDonationsLayout>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/donations/${params.email}`)
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "campaign/:id",
        element: <PrivateRoute>
          <CampaignDetails></CampaignDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.id}`)
      },
      {
        path: "updateCampaign/:id",
        element: <PrivateRoute>
          <UpdateCampaign></UpdateCampaign>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

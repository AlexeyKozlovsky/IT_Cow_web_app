import ChatPage from "./components/pages/ChatPage";
import DoctorsPage from "./components/pages/ChooseDoctorPage";
import SymptomsPage from "./components/pages/ChooseSymptomaticPage";
import LoginPage from "./components/pages/LoginPage";
import MainPage from "./components/pages/MainPage";
import ProfilePage from "./components/pages/ProfilePage";
import RegisterPage from "./components/pages/RegisterPage";
import { CHAT_ROUTE, CHOOSE_DOCTOR_PAGE_ROUTE, CHOOSE_SYMPOMATICS_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE, ROOT_ROUTE } from "./utils/consts";


export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: REGISTER_ROUTE,
        Component: RegisterPage
    },
    {
        path: ROOT_ROUTE,
        Component: MainPage
    }
]

export const privateRoutes = [
    {
        path: CHOOSE_DOCTOR_PAGE_ROUTE,
        Component: DoctorsPage
    },
    {
        path: CHOOSE_SYMPOMATICS_ROUTE,
        Component: SymptomsPage
    },
    {
        path: CHAT_ROUTE,
        Component: ChatPage
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: REGISTER_ROUTE,
        Component: RegisterPage
    },
    {
        path: ROOT_ROUTE,
        Component: MainPage
    }
]


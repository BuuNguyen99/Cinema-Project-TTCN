import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundFage/NotFoundPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import SupportPage from "../pages/SupportPage/SupportPage";
import TheaterPage from "../pages/TheaterPage/TheaterPage";
import EventPage from "../pages/EventPage/EventPage";
import ReviewPage from "../pages/ReviewPage/ReviewPage";
import BuyTicketPage from "../pages/BuyTicketPage/BuyTicketPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import BuyTicketDetailPage from "../pages/BuyTicketDetailPage/BuyTicketDetailPage";
import TicketBooking from "../pages/TicketBooking/TicketBooking";
import UserPage from "../pages/AccountPage/UserPage/UserPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import Item1 from "../pages/HomePage/Promotion/ShowInforPro/Item1";
import Item2 from "../pages/HomePage/Promotion/ShowInforPro/Item2";
import Item3 from "../pages/HomePage/Promotion/ShowInforPro/Item3";
import Item4 from "../pages/HomePage/Promotion/ShowInforPro/Item4";
import PayMovie from "../pages/PayMovie/PayMovie";
import ItemReview1 from "../pages/HomePage/ReviewMovie/ShowInfoReviewMovie/ItemReview1";
import ItemReview2 from "../pages/HomePage/ReviewMovie/ShowInfoReviewMovie/ItemReview2";
import ItemReview3 from "../pages/HomePage/ReviewMovie/ShowInfoReviewMovie/ItemReview3";
import ItemReview4 from "../pages/HomePage/ReviewMovie/ShowInfoReviewMovie/ItemReview4";
const routes = [
  {
    path: "/",
    exact: true,
    main: ({ history }) => <HomePage history={history} />,
  },
  {
    path: "/search",
    exact: false,
    main: () => <SearchPage />,
  },
  {
    path: "/user-page",
    exact: false,
    main: () => <UserPage />,
  },
  {
    path: "/admin-page",
    exact: false,
    main: () => <AdminPage />,
  },
  {
    path: "/support",
    exact: false,
    main: () => <SupportPage />,
  },
  {
    path: "/theater-ticketprice",
    exact: false,
    main: () => <TheaterPage />,
  },
  {
    path: "/event",
    exact: false,
    main: () => <EventPage />,
  },
  {
    path: "/review-film",
    exact: false,
    main: () => <ReviewPage />,
  },
  {
    path: "/coming-soon",
    exact: false,
    main: ({ match }) => <MoviePage match={match} />,
  },
  {
    path: "/now-showing",
    exact: false,
    main: ({ match }) => <MoviePage match={match} />,
  },
  {
    path: "/buy-ticket",
    exact: false,
    main: ({ history }) => <BuyTicketPage history={history} />,
  },
  {
    path: "/buy-ticket-detail/:movie",
    exact: false,
    main: () => <BuyTicketDetailPage />,
  },
  {
    path: "/ticket-booking",
    exact: false,
    main: () => <TicketBooking />,
  },
  {
    path: "/promotion/tung-bung-hai-sao--nhan-uu-dai-khung",
    exact: false,
    main: () => <Item1 />,
  },
  {
    path:
      "/promotion/ngay-tri-an-cua-galaxy-cinema---ngay-thu-hai-dau-tien-moi-thang",
    exact: false,
    main: () => <Item2 />,
  },
  {
    path: "/promotion/bat-kip-thoi-dai-40-bye-bye-the-thanh-vien-nhua",
    exact: false,
    main: () => <Item3 />,
  },
  {
    path: "/promotion/dat-ve-online-khong-lo-tre-nai",
    exact: false,
    main: () => <Item4 />,
  },
  {
    path: "/reviews/5fa3fcce9faf540468468879",
    exact: false,
    main: () => <ItemReview1 />,
  },
  {
    path: "/reviews/5fa3fcce9faf54046846887a",
    exact: false,
    main: () => <ItemReview2 />,
  },
  {
    path: "/reviews/5fa3fcce9faf54046846887b",
    exact: false,
    main: () => <ItemReview3 />,
  },
  {
    path: "/reviews/5fa3fcce9faf54046846887c",
    exact: false,
    main: () => <ItemReview4 />,
  },
  {
    path: "/pay-movie",
    exact: false,
    main: ({ match }) => <PayMovie match={match} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;

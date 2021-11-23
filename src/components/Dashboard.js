import React, { useEffect, useState } from "react";
import "../assets/dashboard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Activity from "./Activity/Activity";
import { getPosts } from "../actions/actions";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const [activities, setActivities] = useState([]);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(getPosts());
  }, []);

  const resActivities = useSelector((state) => {return state?.activities?.data});

  useEffect(() => {
    resActivities && setActivities(resActivities);
  }, [resActivities]);

  return (
    <>
      {/* <!-- Sidebar --> */}
      <input type="checkbox" name="" id="sidebar-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-flex">
            <a className="navbar-brand logo-style" href="#">
              fitrack
            </a>
            <div className="brand-icons">
              {/* <!-- <span className="las la-bell"></span> --> */}
              <span className="las la-user-circle"></span>
            </div>
          </div>
        </div>

        <div className="sidebar-main">
          <div className="sidebar-user">
            <img src="../assets/user.jpg" placeholder="image" />
            <div>
              <h3>John Doe</h3>
              <span>johndoe@gmail.com</span>
            </div>
          </div>
          <div className="sidebar-menu">
            <div className="menu-block">
              <div className="menu-head"></div>
              <ul>
                <li>
                  <a href="">
                    <span className="la la-home"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="la la-plus"></span>
                    Add New Activity
                  </a>
                </li>
                {/* <!-- <li><a href="">
                        <span className="la la-water"></span>
                        Water Tracker
                    </a></li> --> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <header>
          <div className="menu-toggle">
            <label for="sidebar-toggle">
              <span className="las la-bars"></span>
            </label>
          </div>
          {/* <!-- <div className="header-icons">
                     <span className="las la-search"></span>
                     <span className="las la-search"></span>
                     <span className="las la-search"></span>
                 </div> --> */}
        </header>
        <main>
          <div className="page-header">
            <div>
              <h1> Dashboard </h1>
            </div>

            <div className="header-actions">
              <button>
                <Link to="/add">
                  <span className="las la-plus"></span>
                  Add New Activity
                </Link>
              </button>
              {/* <!-- <button>
                         <span className="las la-file-export"></span>
                         Export 
                     </button> --> */}
            </div>
          </div>

          <div className="cards">
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                    <span>Remaining Activities:</span>
                  </div>
                  <p>3</p>
                </div>
              </div>
            </div>
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                    <span>Completed Activities:</span>
                  </div>
                  <p>8</p>
                </div>
              </div>
            </div>
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                    <span>Total Activities:</span>
                  </div>
                  <p>11</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- second row of cards --> */}
          <div className="heading">
            <h2 className="current">Current Activities</h2>
          </div>

          <div className="cards-two">
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                    <span>Running:</span>
                  </div>
                  <p>2 hours</p>
                  <div className="progress-bar">
                    <progress id="prog" value="32" max="100">
                      {" "}
                      32%{" "}
                    </progress>
                  </div>
                </div>
                <div className="card-chart">
                  <a href="./activity-form.html" className="las la-edit">
                    {" "}
                  </a>
                </div>
                <div className="card-done">
                  <a href="#" className="las la-check-circle">
                    {" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                    <span>Cycling:</span>
                  </div>
                  <p>1 hour</p>
                  <div className="progress-bar">
                    <progress id="prog" value="100" max="100">
                      {" "}
                      32%{" "}
                    </progress>
                  </div>
                </div>
                <div className="card-chart">
                  <a href="./activity-form.html" className="las la-edit">
                    {" "}
                  </a>
                </div>
                <div className="card-done">
                  <a href="#" className="las la-check-circle">
                    {" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                    <span>Swimming</span>
                  </div>
                  <p>1 hour</p>
                  <div className="progress-bar">
                    <progress id="prog" value="60" max="100">
                      {" "}
                      32%{" "}
                    </progress>
                  </div>
                </div>
                <div className="card-chart">
                  <a href="./activity-form.html" className="las la-edit">
                    {" "}
                  </a>
                </div>
                <div className="card-done">
                  <a href="#" className="las la-check-circle">
                    {" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                    <span>Hiking</span>
                  </div>
                  <p>1 hour</p>
                  <div className="progress-bar">
                    <progress id="prog" value="0" max="100">
                      {" "}
                      32%{" "}
                    </progress>
                  </div>
                </div>
                <div className="card-chart">
                  <a href="./activity-form.html" className="las la-edit">
                    {" "}
                  </a>
                </div>
                {/* <div className="card-done">
                             {activities.map((activity, id)=>(
                             <Link to={`/edit/${activity.id}`} className="las la-check-circle"> </Link>
                             ))}
                         </div> */}
              </div>
            </div>
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                    <span>Walk</span>
                  </div>
                  <p>3 hours</p>
                  <div className="progress-bar">
                    <progress id="prog" value="10" max="100">
                      {" "}
                      32%{" "}
                    </progress>
                  </div>
                </div>
                <div className="card-chart">
                  <a href="./activity-form.html" className="las la-edit">
                    {" "}
                  </a>
                </div>
                <div className="card-done">
                  <a href="#" className="las la-check-circle">
                    {" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- table completed tasks --> */}
          <section id="completed-a">
            <h2 className="sectionMargin">Completed Activities</h2>
            <table className="styled-table">
              <thead>
                <tr>
                  
                  <th>Name</th>
                  <th>Exercise</th>
                  <th>Duration</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, key) => (
                  <tr key={key}>
                    {console.log(activity)}
                    <td>{activity.name}</td>
                    <td>{activity.activity}</td>
                    <td>{activity.duration}</td>
                    <td>{activity.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.reducer.activities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts()),
  };
};

export default Dashboard;
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

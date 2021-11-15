import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/activityForm.css'
import { useParams } from 'react-router';

const EditActivity = () => {
    const {id}= useParams()
    return (
        <>
  {/* <a classNameName="logo-style" href="#" >fitrack</a>  */}
    <div classNameName="container">
        <div classNameName="row justify-content-center">
            <div classNameName="col-md-8">
                
                <div className="box">
                    <h2>Edit Activity</h2>
                    <form action="#">

                     <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" className="form-control" minLength="4"  placeholder="Enter your name" required/>
                            </div>
                            <div className="form-group">
                              
                                <label for="description">Description</label>
                                <textarea id="description" rows="6" minLength="10" maxlength="120" className="form-control" placeholder="Enter description" required></textarea>
                            </div>
                            <div className="form-group">
                                <label for="activity">Select Activity</label>
                                <select className="form-control" id="activity" required>
                                    <option>Run</option>
                                    <option>Bicycle</option>
                                    <option>Ride</option>
                                    <option>Swim</option>
                                    <option>Walk</option>
                                    <option>Hike</option>
                                  </select>

                            </div>
                            <div className="form-group">
                                <label for="duration">Duration</label>
                                <input type="time" step="0.001" id="duration" name="duration" min="1" max="12" required/>
                            </div>
                            <div className="form-group">
                                <label for="datee">Date</label>
                                <input type="date" id="datee" required/>
                            </div>
                            <div className="row btn-create justify-content-center">
                            <button type="submit" className="btn btn-danger submit-button">Save Changes</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
        </div>
       
    
 
    
        </>
    )
}

export default EditActivity
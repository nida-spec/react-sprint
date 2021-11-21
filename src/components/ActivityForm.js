import React, {useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/activityForm.css'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { createPost, updatePost } from '../actions/actions.js'
import { CREATE } from '../constants/actionTypes';

const ActivityForm = () => {
    const [name, setName]= useState("")
    const [description, setDescription]= useState("") 
    const [activityType, setActivityType]= useState(["Run","Bicycle","Swim","Ride", "Walk", "Hike"]) 
    const Add = activityType.map(Add => Add
        )
    const [duration, setDuration]= useState("") 
    const [selectedDate, setSelectedDate]= useState("") 

    const activities= useSelector((state)=> state)
     const dispatch= useDispatch()

    const history= useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(!name || !description || !duration || !selectedDate){
            return toast.warning("Please fill in all fields.")

        }
        const data= {
            id: activities[activities.length - 1].id+1,
            name,
            description,
            duration,
            selectedDate,
            activityType
        }
        // dispatch({type: "ADD_ACTIVITY", payload: data})
        dispatch(createPost(data))
         toast.success("Activity added successfully")
         history.push("/")
    }
    const handleActivityTypeChange = (e) => console.log(activityType[e.target.value])
 
    
    return (
        <>
  {/* <a classNameName="logo-style" href="#" >fitrack</a>  */}
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                
                <div className="box">
                    <h2>Activity Form</h2>
                    <form onSubmit={handleSubmit}>

                     <div className="form-group">
                                <label htmlFor="name">Name</label>
                                
                                <input type="text" className="form-control" minLength="4" placeholder="Enter your name"
                                value={name} onChange={(e)=> setName(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                              
                                <label htmlFor="description">Description</label>
                                <textarea id="description" rows="6" minLength="10" maxLength="120" className="form-control" 
                                placeholder="Enter description" value={description} onChange={(e)=> setDescription(e.target.value)} required></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="activity">Select Activity</label>
                                <select className="form-control" id="activity" onChange={e => handleActivityTypeChange(e)}>
                                    {/* <option>Run</option>
                                    <option>Bicycle</option>
                                    <option>Ride</option>
                                    <option>Swim</option>
                                    <option>Walk</option>
                                    <option>Hike</option> */}
                                    {Add.map((exercise, key) => <option key={key} value={key}>{exercise}</option>)}
                                  </select>

                            </div>
                            <div className="form-group">
                                <label htmlFor="duration">Duration</label>
                                <input type="number"  id="duration" name="duration" min="1" max="12" 
                                value={duration} onChange={(e)=> setDuration(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="datee">Date</label>
                                <input type="number" id="datee" value={selectedDate} onChange={(e)=> setSelectedDate(e.target.value)} required/>
                            </div>
                            <div className="row btn-create justify-content-center">
                            <button type="submit" className="btn btn-danger submit-button">Create</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
        </div>
       
    
 
    
        </>
    )
}

export default ActivityForm

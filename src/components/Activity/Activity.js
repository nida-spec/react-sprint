import React from 'react'
import "../../assets/dashboard.css"
import { useDispatch } from 'react-redux';
const Activity=({activity})=> {
    const dispatch = useDispatch();
    return (
        <>
              <div class="table-responsive">
    <table class="table table-striped mb-0">
        <tr>
          <td>{activity.name}</td>
        
          <td>{activity.activityType}</td>
          <td>{activity.duration}</td>
          <td>{activity.date}</td>
          {/* <td><button size="small" color="primary" onClick={() => dispatch(counterPost(post._id))}> Count Sets: {post.setCount} </button></td>
          <td><button size="small" color="red" onClick={() => dispatch(deletePost(post._id))}><i class="mdi mdi-delete"></i> Delete</button></td>   
          <td> <button style={{ color: 'green' }} size="small" onClick={() => setCurrentId(post._id)}><i class="mdi mdi-pencil"></i> Edit</button></td> */}
        </tr>
      </table>
      

    </div>
        </>
    )
}

export default Activity

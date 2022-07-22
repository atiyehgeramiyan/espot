import { Link } from 'react-router-dom';

const TaskConfirmItem = ({title,value}) => {
    return (

        <div className="row m-4">
        <div className="col">
           <span>{title}</span>
        </div>
        <div className="col">
            <ul class="list-unstyled ">
                <li className="mb-3">{value}</li>


            </ul>

        </div>

        <div className="col">

           
          





        </div>
    </div>
    )
}

export default TaskConfirmItem;
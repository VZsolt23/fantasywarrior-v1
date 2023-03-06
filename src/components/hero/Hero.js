import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({users}) => {
    return (
        <div className='container'>
            <h1 className='text-center'>Users elemei</h1>
            <Carousel>
                {
                    users?.map((user) =>{
                        return (
                            <Paper>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Nickname</th>
                                            <th>E-mail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{user.nickName}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero
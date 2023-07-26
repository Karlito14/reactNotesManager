import { Logo } from 'components/logo';
import style from './style.module.css';
import logo from 'assets/images/logo.png';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={`row ${style.container}`}> 
            <div className='col-xs-12 col-sm-4'>
                <Logo 
                    onClick={() => navigate('/')}
                    title={'Notomatic'} 
                    subtitle={'Manage Your Notes'} 
                    image={logo} 
                />
            </div>
            <div className='col-xs-12 col-sm-8 text-end'>
                <ButtonPrimary onClick={() => navigate('/note/new')} content={'Add note +'} />
            </div>
        </div>
        
    )
};
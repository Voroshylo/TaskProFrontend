import { Icon } from '../SvgIcon/SvgIcon';
import styles from './NewBoard.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addBoard } from 'redux/boards/boardsOperations';


import noBack from '../../images/images-bg/images-bg-default.png';
import cappodocia from '../../images/background/background/minyjuxoyg5cjxzpk30oeoe.png/';
import baloon from '../../images/background/background/min/v0wt4bwax3bhdlag1ziv.png';
import clouds from '../../images/background/background/min/vlk8bztf90uy6itveqjl.png';
import fullMoon from '../../images/background/background/min/vlk8bztf90uy6itveqjl.png';
import halfMoon from '../../images/background/background/min/vlk8bztf90uy6itveqjl.png';
import magnolia from '../../images/background/background/min/vlk8bztf90uy6itveqjl.png';
import mountains from '../../images/background/background/min/vlk8bztf90uy6itveqjl.png';
import nightTrailer from '../../images/background/background/min/vlk8bztf90uy6itveqjl.png';
import palmLeaves from '../../images/background/background/min/vlk8bztf90uy6itveqjl.png';
import rockyBeach from '../../images/background/background/min/vlk8bztf90uy6itveqjl.png';
import sakura from '../../images/background/background/min/vlk8bztf90uy6itveqjl.png';
import sea from '../../images/background/background/min/vlk8bztf90uy6itveqjl.png';
import starrySky from '../../images/background/background/min/vlk8bztf90uy6itveqjl.png';
import violetCircle from '../../images/background/background/min/vlk8bztf90uy6itveqjl.png';
import yacht from '../../images/background/background/min/vlk8bztf90uy6itveqjl.png';
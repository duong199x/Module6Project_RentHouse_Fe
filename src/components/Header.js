import * as React from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Button, Grid} from "@mui/material";



const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 50
}));

const Header = () => {
    return (
        // <>
        //     <Grid container spacing={1} >
        //         <Grid xs>
        //             <Item>Logo</Item>
        //         </Grid>
        //         <Grid xs={6}>
        //             <Item>Banner</Item>
        //         </Grid>
        //         <Grid xs={2}>
        //             <Item>
        //                 <Button variant="contained">SIGNUP</Button>
        //                 <Button variant="contained">LOGIN</Button>
        //             </Item>
        //         </Grid>
        //     </Grid>
        //     <hr/>
        // </>

        <>
            <header className="hero">
                <div className="hero-wrapper">

                    <div className="secondary-navigation">
                        <div className="container">
                            <ul className="left">
                                <li>
                            <span>
                                <i className="fa fa-phone"></i> +1 123 456 789
                            </span>
                                </li>
                            </ul>

                            <ul className="right">
                                <li>
                                    <a href="my-ads.html">
                                        <i className="fa fa-heart"></i>My Ads
                                    </a>
                                </li>
                                <li>
                                    <a href="sign-in.html">
                                        <i className="fa fa-sign-in"></i>Sign In
                                    </a>
                                </li>
                                <li>
                                    <a href="register.html">
                                        <i className="fa fa-pencil-square-o"></i>Register
                                    </a>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
            </header>
        </>
)
}

export default Header;
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Navbar = () => {
    return (
        <>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <Item>HOUSE</Item>
                <Item>USER</Item>
            </Stack>
            <hr/>
        </>
    )
}
export default Navbar;
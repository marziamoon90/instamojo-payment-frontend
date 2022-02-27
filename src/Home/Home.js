import { Box, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import React from 'react';
import './Home.css';

const Home = () => {

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
                <Box width='25%'>
                    <Box sx={{ border: 1, borderColor: 'grey.500', borderRadius: 1, }}>
                        <Box style={{ backgroundColor: '#617389', borderTop: 0, borderRadius: 0 }}>
                            <Box style={{ display: 'flex', alignItems: 'center', padding: '15px' }}>
                                <img width={'50px'} style={{ borderRadius: '5px' }} src="https://media.instamojo.com/imgs/179a276d106d46d591228d0ec5a8cd05.jpg" alt="" />
                                <Typography style={{ color: 'white', marginLeft: '10px' }} sx={{ textAlign: 'left' }}>Paying to
                                    <br />
                                    Exposys Data Labs</Typography>
                            </Box>
                        </Box>

                        <Box style={{ padding: '10px' }}>
                            {/* form  */}
                            <form style={{ textAlign: 'left', color: 'gray' }}>
                                <label htmlFor="">Purpose of Payment</label>
                                <input
                                    style={{ width: '97%', height: '35px', border: '1px solid lightgray', borderRadius: '4px', marginTop: '5px', marginBottom: '15px' }}
                                    type="text"
                                />
                                <label htmlFor="">Amount</label>
                                <div style={{ width: '98%', height: '35px', border: '1px solid lightgrey', borderRadius: '4px', marginTop: '5px', marginBottom: '15px' }}>
                                    <button style={{ height: '35px', width: '9%', border: 0, fontWeight: 'lighter', borderRadius: '4px' }}>
                                        <i class="fa-solid fa-indian-rupee-sign"></i>
                                    </button>
                                    <input
                                        style={{ height: '32px', width: '89%', border: '0', borderTopRightRadius: '4px', borderBottomRightRadius: '4px' }} type="number" min={0}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value={'Pay'}
                                    style={{ textAlign: 'center', width: '100%', height: '45px', borderRadius: '4px', border: 0, marginTop: '5px', marginBottom: '15px', color: 'white', fontSize: '1em', backgroundColor: '#17AB57' }}

                                />
                            </form>
                        </Box>
                    </Box>
                    <div className='App' >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", marginTop: '15px', padding: '0 40px 0 45px', }}>
                            <h4 style={{ margin: '0', color: 'gray' }}>Powered by </h4>
                            <img width={'140px'} height={'30px'} src="https://i.ibb.co/qdrcNqt/logo-2.png" alt="" />
                        </div>
                    </div>
                </Box>
            </Box >

        </div >
    );
};

export default Home;
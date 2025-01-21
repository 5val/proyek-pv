// UI, ambil data, write data, problem radio button

import React, { useContext, useState } from 'react';
import { Container, Button, Box, Typography, Radio, RadioGroup, FormControl, FormControlLabel , Modal, Input, InputAdornment } from '@mui/material';
import { AuthContext } from '../context/Auth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',

  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: '2vh'
};

export default function TopUp(){
    const [nominalTopUp, setNominalTopUp]= useState(0);
    const [open, setOpen] = React.useState(false);
    const [errInput, setErrInput] = useState(false);
    const [value, setValue] = useState('');
    const [radioValue, setRadioValue] = useState('bca')
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {userActive, topUp} = useContext(AuthContext)

    const imgTopUp = [
        {
            name:'bca',
            txt: 'BCA Virtual Account',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1280px-Bank_Central_Asia.svg.png'
        },
        {
            name:'mandiri',
            txt: 'Mandiri Virtual Account',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png'
        },
        {
            name:'bni',
            txt: 'BNI Virtual Account',
            src: 'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1024px-BNI_logo.svg.png'
       },
       {
            name:'gopay',
            txt: 'Gopay',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/462px-Gopay_logo.svg.png'
        },         
        {
            name:'ovo',
            txt: 'OVO',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png'
        }
    ]

    function handleTopUp(x){
        console.log(userActive)
        if (x >= 10000){
            userActive.saldo= userActive.saldo + parseInt(x)
            topUp()
            handleOpen();
            setValue('')
            setNominalTopUp(0)
        }
    }

    const cekNominal = (e) => {
        const value = e.target.value;  // Mengambil nilai input
        setNominalTopUp(value)
        setValue(value);
        console.log("Nilai yang dimasukkan:", value);
        console.log(userActive.saldo)
        
        if (parseInt(value, 10) < 10000) {
          setErrInput('Min. Rp10.000')
        }
        else{
            setErrInput('')
        }
      };

      const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
      };

    return(<>
        <Container sx={{ textAlign: 'center', minHeight: '680px', padding: 2}}>
            <Box sx={{}}>
                <h1 style={{fontSize:'2.5vw'}}>Top-up</h1>
                <h2 style={{marginRight: '33.3vh', fontWeight:'900', marginTop: '3vh'}}>Mau top-up berapa ?</h2>
                <FormControl sx={{ m: 1, width:'50%', border:'solid #808080', borderRadius: 3,paddingTop:1, paddingBottom: 2, paddingLeft:2, paddingRight: 2,boxShadow:'1vh' }} variant="standard">
                    <Input
                        value={value}
                        type='number'
                        onChange={(e) => 
                            (cekNominal(e))
                        }
                      id="standard-adornment-amount"
                      startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                    />
                </FormControl>
                <Typography variant="h5" sx={{color: 'red', marginRight:'26.5vw',fontSize:'1.3vh'}}>{errInput}</Typography>
                <h2 style={{marginRight: '29vh', fontWeight:'900', marginTop: '3vh'}}>Bayar pakai metode apa ?</h2>
            </Box>
            <Box sx={{marginRight:'17.5vw'}}>
                <FormControl sx={{marginRight:'0', marginTop:'1vh'}}>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      onChange={handleRadioChange}
                      value={radioValue}
                    >
                        {
                            imgTopUp.map( (item, i) => 
                                <FormControlLabel value={item.name} key={i}  control={<Radio />} label=
                                {<Box sx={{}}><img src={item.src} alt="" style={{width: '5vh', paddingRight:'0.75vw'}} /> {item.txt}</Box>} 
                                /> 
                            )
                        }
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box>
            </Box>
            <div>
              <Button onClick={() => handleTopUp(nominalTopUp)} sx={{border:'solid',marginTop:'10vh',color:'white',fontSize:'2vh', fontWeight:'600' ,backgroundColor:'#00aa5b', width:'32vw', height:'5vh', borderRadius:'1vh'}}>Top-up</Button>
              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={{ ...style}}>
                        <h1>Top-up berhasil</h1>
                  </Box>
                </Modal>
            </div>                        
        </Container>
    </>)
}
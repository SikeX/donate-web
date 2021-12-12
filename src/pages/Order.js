import Footer from "../components/Footer"
import Head from "../components/Head"
import Nav from "../components/Nav"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Info = () => {
    return (
        <div className='w-full bg-white flex flex-col'>
            <div className='flex'>
                <span>name:</span>
                <form>
                    <input />
                </form>
                <div>
                    <input type='checkbox' id='sir' />
                    <label for='sir'>sir</label>
                </div>
                <div>
                    <input type='checkbox' id='woman' />
                    <label for='woman'>woman</label>
                </div>
                <div>
                    <input type='checkbox' id='nameHidden' />
                    <label for='nameHidden'>匿名</label>
                </div>
            </div>
        </div>
    )
}

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },]

const Order = (props) => {
    console.log(props.match.params.name)
    return (
        <div className='w-full h-screen flex flex-col'>
            <Head />
            <Nav />
            <div className='w-full flex md:flex-row flex-col flex-grow bg-gray-100 md:px-16 md:py-8 space-y-2 md:space-x-2' >
                <div className='w-full md:w-2/5 flex flex-col bg-white shadow-lg rounded-lg'>
                    <div className='w-full h-0 pb-1/2 bg-red-400 rounded-t-lg'></div>
                    <div className='flex flex-col flex-grow p-4 '>
                        <div className='px-2 py-1' >订单号：</div>
                        <div className='px-2 py-1' >xxx基金会</div>
                        <div className='px-2 py-1' >校友捐赠</div>
                        <div className='px-2 py-1' >总金额</div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='bg-white w-full flex flex-col space-y-8 py-4 px-4 md:px-16'>
                        <div className='py-3 flex flex-col space-y-2'>
                            <div className='text-xl font-bold' >捐赠信息填写</div>
                            <div className='text-sm text-gray-400 border-b-2'>
                                请填写捐赠详细信息, *为必填项
                            </div>
                        </div>
                        <div className='w-full flex space-x-2'>
                            <TextField
                                required
                                fullWidth label="捐赠人姓名" id="fullWidth" />
                            <RadioGroup className='w-full' row aria-label="gender" name="row-radio-buttons-group">
                                <FormControlLabel value="female" control={<Radio />} label="先生" />
                                <FormControlLabel value="male" control={<Radio />} label="女士" />
                            </RadioGroup>
                        </div>
                        <TextField required fullWidth label="手机号" id="fullWidth" />
                        <TextField required fullWidth label="邮箱" id="fullWidth" />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="院系(部门)" />}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="专业" />}
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="捐赠留言"
                            multiline
                            rows={4}
                        />
                        <TextField fullWidth label="入学时间" id="fullWidth" />
                        <TextField fullWidth label="学号(工号)" id="fullWidth" />
                        <FormControl component="fieldset">
                            <FormLabel component="legend">是否需要收据</FormLabel>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                <FormControlLabel value="female" control={<Radio />} label="是" />
                                <FormControlLabel value="male" control={<Radio />} label="否" />
                            </RadioGroup>
                            <FormLabel component="legend">是否是校友</FormLabel>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                <FormControlLabel value="female" control={<Radio />} label="是" />
                                <FormControlLabel value="male" control={<Radio />} label="否" />
                            </RadioGroup>
                        </FormControl>
                        <div className="flex w-full">
                            <div className='w-full'></div>
                            <Button className='w-36' variant="contained" disableElevation>
                                提交订单
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Order
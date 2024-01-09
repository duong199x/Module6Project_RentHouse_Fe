
import TextField from '@mui/material/TextField';
import {createTheme, ThemeProvider} from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import {ErrorMessage, Field} from "formik";
import {login} from "../../redux/services/UserService";
const theme = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                sx: {
                    width:'100%',
                    fontSize: 14,
                },
            },
        },
        MuiFormControl: {
            defaultProps: {
                sx: {
                    fontSize: 14,
                },
            },
        },
        MuiInputLabel: {
            defaultProps: {
                sx: {
                    fontSize: 14,
                },
            },
            styleOverrides: {
                shrink: ({ ownerState, theme }) => ({
                    ...(ownerState.shrink && {
                        fontSize: "1.5rem !important",
                        top: "0 !important",
                    }),
                }),
            },
        },
        MuiOutlinedInput: {
            defaultProps: {
                sx: {
                    fontSize: 16,
                }
            }
        },
        MuiSelect: {
            defaultProps: {
                sx: {
                    height: '100%',
                    fontSize: 16,
                    backgroundColor: 'white',
                    '&:focus': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
    },
});
export const CustomTextField = ({ name,label}) => {
    return (
        <ThemeProvider theme={theme}>
        <Field
            name={name}
            label={label}
            type={"text"}
            as={TextField}
        />
        </ThemeProvider>
    );
};




export const CustomSelectField = ({ label, options,name,...rest }) => {
    console.log(options)
    return (
        <ThemeProvider theme={theme}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Field
                    as={Select}
                    name={name}
                    {...rest}
                >
                    {options.map((option) => (

                        <MenuItem key={option.id} value={option.id}>
                            {option.name}
                        </MenuItem>
                    ))}
                </Field>
                {/*<ErrorMessage name={name} component="div"/>*/}
            </FormControl>
        </ThemeProvider>
    );
};







// <Field name="startTime">
//     {({ field, form }) => (
//         <DatePicker
//             label="Start Time"
//             value={field.value}
//             onChange={(date) => form.setFieldValue('startTime', date)}
//             renderInput={(params) => <TextField {...params} />}
//         />
//     )}
// </Field>
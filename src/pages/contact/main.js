/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import {PhoneIcon} from "@heroicons/react/24/solid";
import './style.css'
import {Button} from "../../layouts/components";

const Wrapper = tw.div`flex min-h-screen`
const LeftContainer = tw.div`w-5/12 flex bg-primaryLight`
const RightContainer = tw.div`w-7/12 flex flex-col p-12`

const LogoNameWrapper = tw.div`flex ml-2 items-center`
const LogoNameContainer = tw.div`flex rounded-full shadow-contact py-3 px-4`
const LogoContainer = tw.div`w-10 h-10 rounded-full bg-secondaryLight mr-4`
const NameContainer = tw.div`flex items-center justify-center font-semibold text-xl`

const TitleContainer = tw.div`flex ml-2 items-center font-bold text-3xl mt-8 mb-8 text-textBlack`

const FormGrid = tw.div`grid grid-cols-2`

const FormFieldContainer = tw.div`flex flex-col m-2`
const FormFieldLabel = tw.div`mb-1 text-textBlack text-base font-semibold`
const ErrorMessage = tw.div`mt-1 text-secondaryDark text-sm font-medium`

const ButtonContainer = tw.div`flex ml-2 mt-8 items-center`

const CallContainer = tw.div`flex mt-4 mx-2 items-center justify-start text-textBlack`
const CallLogoContainer = tw.div`w-4 h-4 mr-2 flex items-center justify-center`
const CallTextContainer = tw.div`text-base font-normal`

function FormSelectField({name, values, label, defaultValue, touched, errors}){
    return(
        <FormFieldContainer>
            <FormFieldLabel>
                {label}
            </FormFieldLabel>
            <Field
                component="select"
                name={name}
                multiple={false}
                css={errors && touched ?
                    tw`cursor-pointer text-base p-2 border-solid border-2 rounded-md hocus:shadow-md bg-secondaryLight border-secondaryDark transition duration-300`
                    :
                    tw`cursor-pointer text-base p-2 border-solid border-2 rounded-md hocus:shadow-md focus:bg-primaryLight border-primaryDark transition duration-300`
                }
            >
                <option key={0} value="" disabled selected>{defaultValue}</option>
                {values.map((option,index)=>{
                    return(
                        <option key={index+1} value={option.value}>{option.label}</option>
                    )
                })}
            </Field>
            {errors && touched &&
                <ErrorMessage>
                    {errors}
                </ErrorMessage>
            }
        </FormFieldContainer>
    )
}

function FormInputField({name, label, placeholder, touched, errors}){
    return(
        <FormFieldContainer>
            <FormFieldLabel>
                {label}
            </FormFieldLabel>
            <Field
                placeholder={placeholder}
                name={name}
                css={errors && touched ?
                    tw`text-base p-2 border-solid rounded-md hocus:shadow-md bg-secondaryLight border-secondaryDark transition duration-300`
                    :
                    tw`text-base p-2 border-solid rounded-md hocus:shadow-md focus:bg-primaryLight border-primaryDark transition duration-300`
                }

            />
            {errors && touched &&
                <ErrorMessage>
                    {errors}
                </ErrorMessage>
            }
        </FormFieldContainer>
    )
}

export default function Contact() {

    const initialValues = {
        fullName: '',
        email:'',
        phone:'',
        job:'',
        companyName:'',
        need:''
    }

    const contactSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(2, 'Too Short.')
            .max(50, 'Too Long.')
            .required('Required field'),
        email: Yup.string().email('Invalid email').required('Required field'),
        phone: Yup.string().required('Required field'),
        job: Yup.string().required('Required field'),
        companyName: Yup.string()
            .min(2, 'Too Short.')
            .max(50, 'Too Long.')
            .required('Required field'),
        need: Yup.string().required('Required field'),
    });

    return(
        <Wrapper>
            <LeftContainer>

            </LeftContainer>
            <RightContainer>
                <LogoNameWrapper>
                    <LogoNameContainer>
                        <LogoContainer>

                        </LogoContainer>
                        <NameContainer>
                            FlySemi
                        </NameContainer>
                    </LogoNameContainer>
                </LogoNameWrapper>
                <TitleContainer>
                    We will reach out as soon as possible!
                </TitleContainer>
                <Formik
                    initialValues={initialValues}
                    validationSchema={contactSchema}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ errors, touched, isSubmitting}) => (
                        <Form>
                            <FormGrid>
                                <FormInputField
                                    name={"fullName"}
                                    label={"Full Name"}
                                    placeholder={"James Bond"}
                                    errors={errors.fullName}
                                    touched={touched.fullName}
                                />
                                <FormInputField
                                    name={"email"}
                                    label={"Professional Email"}
                                    placeholder={"benji.renoux@gmail.com"}
                                    errors={errors.email}
                                    touched={touched.email}
                                />
                                <FormInputField
                                    name={"phone"}
                                    label={"Phone Number"}
                                    placeholder={"+33695025248"}
                                    errors={errors.phone}
                                    touched={touched.phone}
                                />
                                <FormSelectField
                                    name={"job"}
                                    values={
                                        [
                                            {
                                                value:"pdg",
                                                label:"CEO"
                                            },
                                            {
                                                value:"plombier",
                                                label:"Plumber"
                                            }
                                        ]
                                    }
                                    label={"I am"}
                                    defaultValue={"Select a post"}
                                    errors={errors.job}
                                    touched={touched.job}
                                />
                                <FormInputField
                                    name={"companyName"}
                                    label={"Name of your company"}
                                    placeholder={"Apple"}
                                    errors={errors.companyName}
                                    touched={touched.companyName}
                                />
                                <FormSelectField
                                    name={"need"}
                                    values={
                                        [
                                            {
                                                value:"marketing",
                                                label:"Marketing"
                                            },
                                            {
                                                value:"sales",
                                                label:"Sales"
                                            }
                                        ]
                                    }
                                    label={"Some spec about the need"}
                                    defaultValue={"Please choose"}
                                    errors={errors.need}
                                    touched={touched.need}
                                />
                            </FormGrid>
                            <ButtonContainer>
                                <Button
                                    disabled={isSubmitting}
                                    type="submit"
                                    text={"Submit information"}
                                    reverse={true}
                                    color={'blue'}
                                />
                            </ButtonContainer>
                            <CallContainer>
                                <CallLogoContainer>
                                    <PhoneIcon/>
                                </CallLogoContainer>
                                <CallTextContainer>
                                    Or call us directly at +33 6 95 02 52 48
                                </CallTextContainer>
                            </CallContainer>
                        </Form>
                    )}
                </Formik>
            </RightContainer>
        </Wrapper>
    )
}

const dowList = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
const MIStyle = {width: '2em', paddingRight: '0', paddingLeft: '0', textAlign: 'center'}

export const exampleFields = {
  firstName:    { type: "text",      name: "firstName",    text: "First Name",    placeholder: 'Jack',          required: true },
  lastName:     { type: "text",      name: "lastName",     text: "Last Name",     placeholder: 'Doe',           required: true },
  midInitial:   { type: "text",      name: "midInitial",   text: "M.I.",          placeholder: 'E',             required: false,  size:1, maxLength: 1, style: MIStyle},
  email:        { type: "email",     name: "email",        text: "Email",         placeholder: 'jack@mail.com', required: true },
  addressLine:  { type: "text",      name: "addressLine",  text: "Address Line",  placeholder: 'Awesome str 9', required: true },
  postalCode:   { type: "text",      name: "postalCode",   text: "Postal Code",   placeholder: '12345',         required: true },
  city:         { type: "text",      name: "city",         text: "City",          placeholder: 'Gotham',        required: true },
  state:        { type: "text",      name: "state",        text: "State",         placeholder: 'Missouri',      required: true },
  dob:          { type: "date",      name: "dob",          text: "Date of Birth", format: 'yyyy-mm-dd',         required: true },
  startDate:    { type: "date",      name: "startDate",    text: "Start Date",    format: 'yyyy-mm-dd',         required: true },
  endDate:      { type: "date",      name: "endDate",      text: "End Date",      format: 'yyyy-mm-dd',         required: true },
  password:     { type: "password",  name: "password",     text: "Password",                                    required: true },
  pwConfirm:    { type: "password",  name: "pwConfirm",    text: "Password Confirmation",                       required: true },
  admin:        { type: "chkBox",    name: "admin",        text: "Admin",     selectedValue: "Y" },
  event:        { type: "choice",    name: "eventCode",    text: "Event",                            },
  slideID:      { type: "choice",    name: "slideID",      text: "Slide ID",                         },
  dow:          { type: "chkBoxes",  name: "dow",          text: "Days Of Week",  options: dowList,  },
  times:        { type: "chkBoxes",  name: "times",        text: "Meeting Times",                    },
  slideObs:     { type: "chkBoxes",  name: "slideObs",     text: "Observations",                     },
  comments:     { type: "textArea",  name: "comments",     text: "Comments",  placeholder: 'place your comments here...', required: false },
}


export const applyOptions = (formFieldList, missing) => {

  formFieldList.map( f => {
    if ((f.type == 'choice' || f.type == 'chkBoxes') && missing[f.name]) {
      // console.log(`assigning ${pretty(missing[f.name])} options to ${f.name}`);

       if (f.options != missing[f.name]) {
         // trigger a redraw because the options just changed
       }

       f.options = missing[f.name]
    }
  });

  return formFieldList
}

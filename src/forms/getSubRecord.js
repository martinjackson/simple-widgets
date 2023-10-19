

// newData
//
// {   "nctrId": 6385, "degree": "Ph.D.", "country": "US", "sex": "M", "school": "Univ of SC, Columbia, SC", "degreeComment": null, "visaNote": null, "personNote": null,
//  "appointment": [
//      { "appointmentId": 2904, "nctrId": 6385, "programId": 61, "apptStartDate": "2002-07-19", "apptEndDate": "2003-07-18", "divisionCode": 42, "fte": 1, "mentor": "Morris, Suzanne", "relocationAmt": null, "apptNote": null, "insuranceFlag": "Y", "relocationDate": null, "vacancyId": null, "vacForAppt": null,
//           "stipend": [ { "appointmentId": 2904, "stipendId": 1986, "stipendStartDate": "2002-07-19", "stipendEndDate": "2003-07-18", "stipendAmount": 46795, "stipendNote": null  }],
//           "apptPayer": [ { "appointmentId": 2904, "stipendId": 1986, "payerId": 111, "apPercent": 100, "apNote": null  }],
//           "apptFs": [ { "afsId": 2094, "afsNote": null, "afsPercent": 100, "appointmentId": 2904, "extFsPct": null, "externalFs": null, "fundSource": 8, "fy": null, "internalFs": "6415370", "stipendId": 1986, "vacancyId": null              }          ]
//      },
//      { "appointmentId": 2905, "nctrId": 6385, "programId": 61, "apptStartDate": "2003-07-19", "apptEndDate": "2004-07-18", "divisionCode": 42, "fte": 1, "mentor": "Morris, Suzanne", "relocationAmt": null, "apptNote": null, "insuranceFlag": "Y", "relocationDate": null, "vacancyId": null, "vacForAppt": null,
//           "stipend": [ { "appointmentId": 2905, "stipendId": 1988, "stipendStartDate": "2003-07-19", "stipendEndDate": "2004-07-18", "stipendAmount": 50252, "stipendNote": null }],
//           "apptPayer": [ { "appointmentId": 2905, "stipendId": 1988, "payerId": 111, "apPercent": 100, "apNote": null }],
//           "apptFs": [ { "afsId": 2096, "afsNote": null, "afsPercent": 100, "appointmentId": 2905, "extFsPct": null, "externalFs": null, "fundSource": 8, "fy": null, "internalFs": "6415370", "stipendId": 1988, "vacancyId": null } ]
//      },
//      { "appointmentId": 1616, "nctrId": 6385, "programId": 61, "apptStartDate": "2001-07-19", "apptEndDate": "2002-07-18", "divisionCode": 42, "fte": 1, "mentor": "Morris, Suzanne", "relocationAmt": 1500, "apptNote": null, "insuranceFlag": "Y", "relocationDate": "2001-07-19", "vacancyId": null, "vacForAppt": null,
//           "stipend": [ { "appointmentId": 1616, "stipendId": 1136, "stipendStartDate": "2001-07-19", "stipendEndDate": "2002-07-18", "stipendAmount": 43326, "stipendNote": null }],
//           "apptPayer": [ { "appointmentId": 1616, "stipendId": 1136, "payerId": 111, "apPercent": 100, "apNote": null }, { "appointmentId": 1616, "stipendId": 624, "payerId": 111, "apPercent": 100, "apNote": null }],
//           "apptFs": [
//                 { "afsId": 17852, "afsNote": null, "afsPercent": null, "appointmentId": 1616, "extFsPct": null, "externalFs": null, "fundSource": 8, "fy": null, "internalFs": "6415370", "stipendId": 1136, "vacancyId": null },
//                 { "afsId": 1702, "afsNote": null, "afsPercent": 100, "appointmentId": 1616, "extFsPct": null, "externalFs": null, "fundSource": null, "fy": null, "internalFs": "6415333", "stipendId": 624, "vacancyId": null }
//           ]
//       }
//    ],
//   "userdir": [ { "lastName": " Akerman", "firstName": "Gregory", "fullName": "Akerman, Gregory" } ]
// }

// const lastDot = targetName.lastIndexOf('.')                                   // lastDot = 24, targetName = "person[0].appointment[0].apptNote"
// let recName = (lastDot != -1) ? targetName.substr(0, lastDot) : targetName    // recName = "person[0].appointment[0]"
// let fieldName = (lastDot != -1) ? targetName.substr(lastDot+1) : targetName   // fieldName = "appNote"

export function getSubRecord(recName, newData) {
  console.log(`getSubRecord(${recName}, ${newData})`);
  // TODO:  need code here


}

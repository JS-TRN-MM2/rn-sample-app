type CaseStepsParams = {
  step: string;
  desc: string;
};

const casesteps: Array<CaseStepsParams> = [
  {
    step: 'Choose Case',
    desc: 'Name; address; disposition; phone',
  },

  {
    step: 'View Case Details',
    desc: 'Respondent; address; phone; language,; current status; status date; appt date',
  },

  {
    step: 'Options Button',
    desc: 'Face sheets; Add Eroc; Eroc Review; Prev Round EROCS, RU Contact Module, Task Overview;',
  },

  {
    step: 'Face Sheets Choice',
    desc: 'Round 1;Round 2;Round 3;Round 4;Round 5;Round 6;Round 7;Round 8;',
  },

  {
    step: 'Add EROC Choice',
    desc: 'Date; contact type; contact result; who contacted; comments',
  },
];

export default casesteps;

export const claimdetail = () => {
    let array = [
      {
        label: 'From Date ',
        type: 'date',
        name: 'fromdate ',
        placeholder: 'From Date',
      },
      {
        label: 'To Date',
        type: 'datee',
        name: 'todate ',
        placeholder: 'To Date',
      },
   
    ];
  
    return array;
  };
  export const claimadd= () => {
    let array = [
      {
        label: 'Created Date ',
        type: 'textField',
        name: 'CreatedDate ',
        placeholder: 'From Date',
      },
      {
        label: 'Claim No',
        type: 'textField',
        name: 'claimno',
        placeholder: 'Claim No',
      },
      {
        label: 'Claim Item',
        type: 'dropdown',
        name: 'claimitem',
        placeholder: 'Claim Item',
      },
      {
        label: 'Remark',
        type: 'textField',
        name: 'remark',
        placeholder: 'Claim Item',
      },
   
    ];
  
    return array;
  };
  export const claimvalue= () => {
    let array = [
      {
        label: 'Receipt No',
        type: 'textField',
        name: 'Receiptno ',
        placeholder: 'From Date',
      },
      {
        label: 'Claim Date',
        type: 'textField',
        name: 'claimdate',
        placeholder: 'Claim No',
      },
    
      {
        label: 'Claim Amount',
        type: 'dropdown',
        name: 'claimamount',
        placeholder: 'Claim Item',
      },
      {
        label: 'Remark',
        type: 'textField',
        name: 'remarks',
        placeholder: 'remark',
      },
   
    ];
  
    return array;
  };
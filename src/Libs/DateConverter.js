export function CsharpDateTimeToDate(CSharptime) {
  return new Date(
    `${CSharptime.slice(5, 7)}/${CSharptime.slice(8, 10)}/${CSharptime.slice(
      0,
      4
    )} ${CSharptime.slice(11)}`
  );
}

//compare with > < operators

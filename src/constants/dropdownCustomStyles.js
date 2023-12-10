export const dropdownCustomStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
      maxWidth: "17rem",
      minWidth: "15rem",
      borderRadius: "10px",
      color: "#FFFFFF",
      fontSize: "0.9rem",
      lineHeight: "1rem",
      backgroundColor: "#FFF",
      cursor: "pointer",
      border: "2px solid #34AC90",
      boxShadow: "4px 4px 0px 0px rgba(60,179,113)",
      ":hover": {
        border: "2px solid #3CB371",
        boxShadow: "none",
      },
    }),
    option: (styles) => {
      return {
        ...styles,
        color: "#23316C",
        fontSize: "0.8rem",
        lineHeight: "1rem",
        width: "100%",
        border: "3px solid #FFFFFF",
        background: "#FFFFFF",
        ":hover": {
          backgroundColor: "#ADACAC",
          color: "#FFFFFF",
          cursor: "pointer",
        },
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        backgroundColor: "#FFFFFF",
        maxWidth: "14rem",
        border: "2px solid #43CD80",
        borderRadius: "5px",
      };
    },
  };
  
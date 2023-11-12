const CheckBox = ({ checkBox, setCheckBox, title, setClicked }) => {
  const handleCheckboxClick = (id) => {
    setClicked(true);
    setCheckBox((prevCheckBox) => {
      return prevCheckBox.map((item) => {
        return { ...item, checked: item.id === id };
      });
    });
  };
  return (
    <div className="">
      <h2 className="text-[1.8vw] text-[#828282] mb-[2.4vh] font-medium">
        {title}
      </h2>
      <div className="grid grid-cols-3 gap-y-[2vh]">
        {checkBox.map((item) => {
          if (item.checked) {
            return (
              <div className="flex flex-row items-center gap-[10px]">
                <div className="w-[32px] h-[32px] border-[1px] border-[#696969] rounded-[10px] bg-[#696969]" />
                <div className="text-[1.1vw] text-[#696969]">{item.name}</div>
              </div>
            );
          } else {
            return (
              <div
                className="flex cursor-pointer flex-row items-center gap-[10px]"
                onClick={() => handleCheckboxClick(item.id)}
              >
                <div className="w-[32px] h-[32px] border-[1px] border-[#696969] rounded-[10px]" />
                <div className="text-[1.1vw] text-[#696969]">{item.name}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CheckBox;

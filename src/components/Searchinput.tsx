import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuery from "../stores/gameQuery";



const Searchinput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQuery(s=>s.setSearchText)
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          console.log(ref.current.value);
          setSearchText(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games...."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default Searchinput;

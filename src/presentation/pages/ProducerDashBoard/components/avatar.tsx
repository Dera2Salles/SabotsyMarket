import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import pic from "../../../../assets/producer.jpg";

export const AvatarProducer = () => {
  return (
    <Avatar className=" size-11 transition-all duration-500 hover:size-13">
      <AvatarImage src={pic} alt="Admin picture" />
      <AvatarFallback>RA</AvatarFallback>
    </Avatar>
  );
};

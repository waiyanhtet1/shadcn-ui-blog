import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const CharacterCard = ({ image, name, species, status }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{species}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={image} width={250} height={250} alt="" className="mx-auto" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge
          variant={
            (status === "Dead" && "destructive") ||
            (status === "unknown" && "secondary") ||
            "default"
          }
        >
          {status}
        </Badge>
        <Button asChild variant="outline">
          <Link href="/login">
            See More <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CharacterCard;

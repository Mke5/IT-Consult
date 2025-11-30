import { PiStarFill, PiStarHalf, PiStar } from "react-icons/pi";

type RatingStarsProps = {
  rating: number;
};

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 <= 0.75;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    return (
        <div className="flex items-center gap-1 text-[#29CC7A] text-xl">
            {Array.from({ length: fullStars }).map((_, i) => (
                <PiStarFill key={`full-${i}`} />
            ))}

            {hasHalf && <PiStarHalf key="half" />}

            {Array.from({ length: emptyStars }).map((_, i) => (
                <PiStar key={`empty-${i}`} />
            ))}

            <span className="ml-2 text-gray-800 text-base">{rating.toFixed(1)}</span>
        </div>
    );
};

export default RatingStars;

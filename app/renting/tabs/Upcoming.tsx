"use client";
import { useRouter } from "next/navigation";
import {
	Table,
	TableBody,
	TableCell,
	TableRow,
	TableHead,
	TableHeader,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Chip from "@/components/Chip";

export default function Upcoming() {
	const router = useRouter();
	return (
		<Table className="w-full py-[27px] px-[30px] rounded-[25px]">
			<TableHeader>
				<TableRow className="border-none">
					<TableHead className="text-slate-400 text-sm">RENTER/ITEM</TableHead>
					<TableHead className="text-slate-400 text-sm">DATE</TableHead>
					<TableHead className="text-slate-400 text-sm">STATUS</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{details.map((detail, index) => (
					<TableRow
						key={detail.customer}
						className={`border-none py-[25px] px-[22px] cursor-pointer ${
							(index + 1) % 2 === 0 ? "bg-transparent" : "bg-white"
						}`}
						onClick={() => router.push(`/renting/${detail.itemId}`)}
					>
						<TableCell className="flex items-center gap-x-4.5">
							<Avatar className="w-[50px] h-[50px]">
								<AvatarImage
									src="https://github.com/shadcn.png"
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<div className="flex flex-col gap-0.5">
								<p className="text-slate-400">{detail.customer}</p>
								<p className="text-slate-800 text-lg font-medium">
									{detail.item}
								</p>
							</div>
						</TableCell>
						<TableCell className="text-slate-800 text-lg font-medium">
							{detail.duration}
						</TableCell>
						<TableCell className="text-slate-600 text-sm">
							<Chip
								text={detail.status}
								className="bg-orange-50 text-orange-500"
							/>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

const details = [
	{
		avatar: "",
		customer: "Lolu B.",
		item: "Polaroid SB-6A",
		duration: "Jan 1, 2020 - Mar 15, 2020",
		status: "Scheduled for rent",
		itemId: "1a2b3c",
	},
	{
		avatar: "",
		customer: "Abolaji B.",
		item: "Cannon XB-FG",
		duration: "Feb 5, 2020 ",
		status: "Scheduled for rent",
		itemId: "4d5e6f",
	},
	{
		avatar: "",
		customer: "Gifty Ogechukwu",
		item: "HoverAir X1",
		duration: "Nov 18, 2020",
		status: "Scheduled for rent",
		itemId: "7g8h9i",
	},
];

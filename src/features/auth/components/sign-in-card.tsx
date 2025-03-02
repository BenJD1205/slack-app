import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
	Card,
	CardTitle,
	CardHeader,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SignInFlow } from "../types";

interface SignInCardProps {
	setState: (value: SignInFlow) => void;
}

export const SignInCard = ({ setState }: SignInCardProps) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<Card className="w-full h-full p-8">
			<CardHeader className="px-0 pt-0">
				<CardTitle>Login to continue</CardTitle>
				<CardDescription>
					Use your email or another service to continue
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-2.5">
				<form className="space-y-2.5">
					<Input
						disabled={false}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
						type="email"
						required
					/>
					<Input
						disabled={false}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
						type="password"
						required
					/>
					<Button className="w-full" type="submit" size="lg" disabled={false}>
						Continue
					</Button>
				</form>
				<Separator />
				<div className="flex flex-col gap-y-2.5">
					<Button
						disabled={false}
						onClick={() => {}}
						className="w-full relative"
						size="lg"
						variant="outline"
					>
						<FcGoogle className="size-5 absolute top-2.5 left-2.5" />
						Continue with Google
					</Button>
					<Button
						disabled={false}
						onClick={() => {}}
						className="w-full relative"
						size="lg"
						variant="outline"
					>
						<FaGithub className="size-5 absolute top-2.5 left-2.5" />
						Continue with Github
					</Button>
				</div>
				<p className="text-xs text-muted-foreground">
					Don&apos;t have an account?{" "}
					<span
						className="text-sky-700 hover:underline cursor-pointer"
						onClick={() => setState("signUp")}
					>
						Sign up
					</span>
				</p>
			</CardContent>
		</Card>
	);
};

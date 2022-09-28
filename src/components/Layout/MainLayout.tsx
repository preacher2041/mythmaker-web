import { Dialog, Transition } from '@headlessui/react';
import {
	HomeIcon,
	MenuIcon,
	UserCircleIcon,
	XIcon
} from '@heroicons/react/outline';
import clsx from 'clsx';
import { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import MmLogo from '@/assets/MM_Logo.svg';
import { useAuth } from '@/hooks/useAuth';

import { Button, Spinner } from '../Elements';

type SideNavigationItem = {
	name: string;
	to: string;
	icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
	current: boolean;
};

const SideNavigation = () => {
	const navigation = [
		{ name: 'Home', to: '/home', icon: HomeIcon, current: true }
	].filter(Boolean) as SideNavigationItem[];

	return (
		<>
			{navigation.map((item, index) => (
				<NavLink
					end={index === 0}
					key={item.name}
					to={item.to}
					className={clsx(
						item.current
							? 'bg-gray-100 text-gray-900'
							: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
						'group flex items-center px-2 py-2 text-base font-medium rounded-md'
					)}>
					<item.icon
						className={clsx(
							item.current
								? 'text-gray-500'
								: 'text-gray-400 group-hover:text-gray-500',
							'mr-4 flex-shrink-0 h-6 w-6'
						)}
						aria-hidden="true"
					/>
					{item.name}
				</NavLink>
			))}
		</>
	);
};

const UserProfile = () => {
	const { user, isLoading } = useAuth();
	if (!isLoading) {
		return (
			<div className="flex-shrink-0 flex border-t border-gray-200 p-4">
				<Link
					to="/home/user-profile"
					className="flex-shrink-0 w-full group block">
					<div className="flex items-center">
						<div className="inline-block h-9 w-9 rounded-full">
							<UserCircleIcon />
						</div>
						<div className="ml-3">
							<p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
								{`${user?.firstName} ${user?.lastName}`}
							</p>
							<p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
								View profile
							</p>
						</div>
					</div>
				</Link>
			</div>
		);
	} else {
		return <Spinner variant="light" />;
	}
};

const Logo = () => {
	return (
		<div className="flex-shrink-0 flex items-center px-4">
			<img className="h-12 w-auto mr-3" src={MmLogo} alt="Workflow" />
			<h1>MythMaker</h1>
		</div>
	);
};

type MobileSideBarProps = {
	sideBarOpen: boolean;
	setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSideBar = (props: MobileSideBarProps) => {
	const { sideBarOpen, setSideBarOpen } = props;
	return (
		<>
			<Transition.Root show={sideBarOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-40 md:hidden"
					onClose={setSideBarOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
					</Transition.Child>

					<div className="fixed inset-0 flex z-40">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full">
							<Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0">
									<div className="absolute top-0 right-0 -mr-12 pt-2">
										<Button
											type="button"
											className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
											onClick={() =>
												setSideBarOpen(false)
											}>
											<span className="sr-only">
												Close sidebar
											</span>
											<XIcon
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</Button>
									</div>
								</Transition.Child>
								<div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
									<Logo />
									<nav className="mt-5 px-2 space-y-1">
										<SideNavigation />
									</nav>
								</div>
							</Dialog.Panel>
						</Transition.Child>
						<div className="flex-shrink-0 w-14">
							{/* Force sidebar to shrink to fit close icon */}
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
};

const SideBar = () => {
	return (
		<>
			<div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
					<div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
						<Logo />
						<nav className="mt-5 flex-1 px-2 bg-white space-y-1">
							<SideNavigation />
						</nav>
					</div>
					<UserProfile />
				</div>
			</div>
		</>
	);
};

type MainLayoutProps = {
	children: React.ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
	const { children } = props;
	const [sideBarOpen, setSideBarOpen] = useState(false);

	return (
		<div>
			<MobileSideBar
				sideBarOpen={sideBarOpen}
				setSideBarOpen={setSideBarOpen}
			/>
			<SideBar />
			<div className="md:pl-64 flex flex-col flex-1">
				<div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
					<Button
						type="button"
						className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						onClick={() => setSideBarOpen(true)}>
						<span className="sr-only">Open sidebar</span>
						<MenuIcon className="h-6 w-6" aria-hidden="true" />
					</Button>
				</div>
				<main className="flex-1">
					<div className="py-6">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
							{children}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
	return (
		<header>
			<MobileHeader></MobileHeader>
			<DesktopHeader></DesktopHeader>
		</header>
	);
};

const MobileHeader = () => {
	return (
		<MobileOnly>
			<SuperHeader>
				<Row>
					<ActionGroup>
						<button>
							<Search size={24} />
						</button>
						<button>
							<Menu size={24} />
						</button>
					</ActionGroup>
					<ActionGroup>
						<button>
							<User size={24} />
						</button>
					</ActionGroup>
				</Row>
			</SuperHeader>
			<MainHeader>
				<Logo />
			</MainHeader>
		</MobileOnly>
	);
};

const DesktopHeader = () => {
	return (
		<DesktopOnly>
			<Row>
				<ActionGroup>
					<button>
						<Search size={24} />
					</button>
					<button>
						<Menu size={24} />
					</button>
				</ActionGroup>
				<MainHeader>
					<Logo />
				</MainHeader>
				<CenteredBlock>
					<Button>Subscribe</Button>
					<TextLink href="/">Already a subscriber?</TextLink>
				</CenteredBlock>
			</Row>
		</DesktopOnly>
	);
};

const MobileOnly = styled.div`
	@media ${QUERIES.desktopAndUp} {
		display: none;
	}
`;

const DesktopOnly = styled.div`
	display: none;

	@media ${QUERIES.desktopAndUp} {
		display: block;
	}
`;

const SuperHeader = styled.div`
	padding: 16px 0;
	background: var(--color-gray-900);
	color: white;
`;

const Row = styled(MaxWidthWrapper)`
	display: flex;
	justify-content: space-between;
`;

const ActionGroup = styled.div`
	display: flex;
	gap: 24px;

	/*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
	svg {
		display: block;
	}
`;

const MainHeader = styled(MaxWidthWrapper)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 32px;
	margin-bottom: 48px;
`;

const CenteredBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;
`;

const TextLink = styled.a`
	color: var(--color-gray-900);
	font-family: var(--font-family-serif);
	font-weight: var(--font-weight-normal);
	font-style: italic;
	text-decoration: underline;
`;

export default Header;

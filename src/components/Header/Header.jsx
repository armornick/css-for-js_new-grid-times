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
				<DesktopActionGroup>
					<button>
						<Search size={24} />
					</button>
					<button>
						<Menu size={24} />
					</button>
				</DesktopActionGroup>
				<Logo />
				<CenteredBlock>
					<Button>Subscribe</Button>
					<TextLink href="/">Already a subscriber?</TextLink>
				</CenteredBlock>
			</MainHeader>
		</header>
	);
};

const SuperHeader = styled.div`
	padding: 16px 0;
	background: var(--color-gray-900);
	color: white;

	@media ${QUERIES.laptopAndUp} {
		display: none;
	}
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

const DesktopActionGroup = styled(ActionGroup)`
	display: none;

	@media ${QUERIES.laptopAndUp} {
		display: flex;
	}
`;

const MainHeader = styled(MaxWidthWrapper)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 32px;
	margin-bottom: 48px;

	@media ${QUERIES.tabletAndUp} {
		margin-top: 48px;
		margin-bottom: 72px;
	}

	@media ${QUERIES.laptopAndUp} {
		margin-top: 16px;
		margin-bottom: 72px;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
	}
`;

const CenteredBlock = styled.div`
	display: none;

	@media ${QUERIES.laptopAndUp} {
		justify-self: end;
		align-self: end;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 8px;
	}
`;

const TextLink = styled.a`
	color: var(--color-gray-900);
	font-family: var(--font-family-serif);
	font-weight: var(--font-weight-normal);
	font-style: italic;
	font-size: 0.872rem;
	text-decoration: underline;
`;

export default Header;

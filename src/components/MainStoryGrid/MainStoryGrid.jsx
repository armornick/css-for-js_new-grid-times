import React from "react";
import styled from "styled-components";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
	return (
		<Wrapper>
			<MainStorySection>
				<MainStory {...MAIN_STORY} />
			</MainStorySection>

			<SecondaryStorySection>
				<StoryList>
					{SECONDARY_STORIES.map((story, index) => (
						<SecondaryStory key={story.id} {...story} />
					))}
				</StoryList>
			</SecondaryStorySection>

			<OpinionSection>
				<SectionTitle>Opinion</SectionTitle>
				<OpinionStoryList>
					{OPINION_STORIES.map((story, index) => (
						<OpinionStory key={story.id} {...story} />
					))}
				</OpinionStoryList>
			</OpinionSection>

			<AdvertisementSection>
				<Advertisement />
			</AdvertisementSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-areas:
		"main-story"
		"secondary-stories"
		"opinion-stories"
		"advertisement";
	gap: 48px;
	margin-bottom: 48px;

	@media ${QUERIES.tabletAndUp} {
		gap: 48px 0;
		grid-template-columns: 2fr 1fr;
		grid-template-areas:
			"main-story secondary-stories"
			"advertisement advertisement"
			"opinion-stories opinion-stories";
	}

	@media ${QUERIES.laptopAndUp} {
		gap: 0;
		grid-template-columns: 5fr 4fr 3fr;
		grid-template-areas:
			"main-story secondary-stories opinion-stories"
			"main-story advertisement advertisement";
	}
`;

const MainStorySection = styled.section`
	grid-area: main-story;

	@media ${QUERIES.tabletAndUp} {
		margin-right: 16px;
		border-right: 1px solid var(--color-gray-300);
		padding-right: 16px;
	}
`;

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;

	@media ${QUERIES.laptopAndUp} {
		margin-right: 16px;
		border-right: 1px solid var(--color-gray-300);
		padding-right: 16px;
	}
`;

const StoryList = styled.div`
	display: flex;
	flex-direction: column;

	& > * + * {
		margin-top: 16px;
		border-top: 1px solid var(--color-gray-300);
		padding-top: 16px;
	}
`;

const OpinionStoryList = styled(StoryList)`
	@media ${QUERIES.tabletOnly} {
		display: grid;
		grid-auto-flow: column;
		gap: 32px;

		& > * + * {
			border-top: none;
		}
	}
`;

const OpinionSection = styled.section`
	grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
	grid-area: advertisement;

	@media ${QUERIES.laptopAndUp} {
		margin-top: 16px;
		border-top: 1px solid var(--color-gray-300);
		padding-top: 16px;
	}
`;

export default MainStoryGrid;

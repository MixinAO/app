import {CardProposalProps} from '@aragon/ui-components';

/**
 * Stub hook for querying subgraph to get dao proposals
 * @returns List of proposals and the top ten proposals
 */
export const useDaoProposals = (showProposal: boolean) => {
  if (!showProposal) return {topTen: []};
  else return {topTen: MOCK_PROPOSALS};
};

const MOCK_PROPOSALS: MockProposal[] = [
  {
    process: 'pending',
    title: 'New Founding for Lorex Lab SubDao',
    description:
      'As most community members know, Aragon has strived to deploy its products to more cost-efficient blockchain networks to facilitate ...',
    voteTitle: 'Winning Option',
    voteProgress: 70,
    voteLabel: 'Yes',
    tokenAmount: '3.5M',
    tokenSymbol: 'DNT',
    publishLabel: 'Published by',
    publisherAddress: '0x374d444487A4602750CA00EFdaC5d22B21F130E1',
    alertMessage: 'Starts in 3 days 5 hours',
    stateLabel: [
      'Draft',
      'Pending',
      'Active',
      'Executed',
      'Succeeded',
      'Defeated',
    ],
  },
  {
    process: 'succeeded',
    title: 'Aragon Court deployment on Arbitrum',
    description:
      'As most community members know, Aragon has strived to deploy its products to more cost-efficient blockchain networks to facilitate ...',
    voteTitle: 'Winning Option',
    voteProgress: 70,
    voteLabel: 'Yes',
    tokenAmount: '3.5M',
    tokenSymbol: 'DNT',
    publishLabel: 'Published by',
    publisherAddress: '0x374d444487A4602750CA00EFdaC5d22B21F130E1',
    alertMessage: 'Starts in 3 days 5 hours',
    stateLabel: [
      'Draft',
      'Pending',
      'Active',
      'Executed',
      'Succeeded',
      'Defeated',
    ],
  },
  {
    process: 'active',
    title: 'Proposal to change DAO name and description',
    description:
      'I think the current DAO name doesn’t match our mission and purpose, therefore we should do this, that, and whatever else.',
    voteTitle: 'Winning Option',
    voteProgress: 70,
    voteLabel: 'Yes',
    tokenAmount: '3.5M',
    tokenSymbol: 'DNT',
    publishLabel: 'Published by',
    publisherAddress: '0x374d444487A4602750CA00EFdaC5d22B21F130E1',
    alertMessage: '5 days left',
    stateLabel: [
      'Draft',
      'Pending',
      'Active',
      'Executed',
      'Succeeded',
      'Defeated',
    ],
  },
  {
    process: 'defeated',
    title: 'New Founding for New Canines SubDao',
    description:
      'As most community members know, Aragon has strived to deploy its products to more cost-efficient blockchain networks to facilitate ...',
    voteTitle: 'Winning Option',
    voteProgress: 70,
    voteLabel: 'Yes',
    tokenAmount: '3.5M',
    tokenSymbol: 'DNT',
    publishLabel: 'Published by',
    publisherAddress: '0x374d444487A4602750CA00EFdaC5d22B21F130E1',
    alertMessage: 'Starts in x days y hours',
    stateLabel: [
      'Draft',
      'Pending',
      'Active',
      'Executed',
      'Succeeded',
      'Defeated',
    ],
  },
  {
    process: 'executed',
    title: 'Grant 185k to Tree Lovers SubDao',
    description:
      'As most community members know, Aragon has strived to deploy its products to more cost-efficient blockchain networks to facilitate ...',
    voteTitle: 'Winning Option',
    voteProgress: 70,
    voteLabel: 'Yes',
    tokenAmount: '3.5M',
    tokenSymbol: 'DNT',
    publishLabel: 'Published by',
    publisherAddress: '0x374d444487A4602750CA00EFdaC5d22B21F130E1',
    alertMessage: 'Starts in x days y hours',
    stateLabel: [
      'Draft',
      'Pending',
      'Active',
      'Executed',
      'Succeeded',
      'Defeated',
    ],
  },

  {
    process: 'active',
    title: 'Convert Nature Lovers Guild to Druids SubDao',
    description:
      'As most community members know, Aragon has strived to deploy its products to more cost-efficient blockchain networks to facilitate ...',
    voteTitle: 'Winning Option',
    voteProgress: 33,
    voteLabel: 'Yes',
    tokenAmount: '3.5M',
    tokenSymbol: 'DNT',
    publishLabel: 'Published by',
    publisherAddress: '0x374d444487A4602750CA00EFdaC5d22B21F130E1',
    alertMessage: '2 days left',
    stateLabel: [
      'Draft',
      'Pending',
      'Active',
      'Executed',
      'Succeeded',
      'Defeated',
    ],
  },
];

export type MockProposal = Omit<
  CardProposalProps,
  'onClick' | 'type' | 'daoLogo' | 'daoName' | 'chainId'
>;
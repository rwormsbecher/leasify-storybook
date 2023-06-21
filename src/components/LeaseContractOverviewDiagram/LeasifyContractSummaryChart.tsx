import React from 'react';
import styled from 'styled-components';
import { LeasifyContentCard } from '../ContentCard/ContentCard';

export interface LeaseContractOverviewDiagramProps {
    contractTotal: number;
    contractUsedTotal: number;
    contractPendingTotal: number;
}

const DiagramContainer = styled.div`
    display: flex;
    width: 100%;
    height: 8px;
`;

const PercentageBarBase = styled.div<{ width: number }>`
    width: ${props => props.width.toString()}%;
    height: 100%;
    display: inline-block;
    border-radius: 4px;
`;

const UsedPercentageBar = styled(PercentageBarBase)`
    background: ${props => props.theme.primaryMuted400};
    z-index: 3;
`;

const PendingPercentageBar = styled(PercentageBarBase)`
    background: khaki;
    margin-left: -4px;
    width: calc(${props => props.width.toString()}% + 4px);
    background: ${props => props.theme.secondaryColor700};
    z-index: 2;
`;

const AvailablePercentageBar = styled(PercentageBarBase)`
    background: grey;
    margin-left: -4px;
    width: calc(${props => props.width.toString()}% + 4px);
    background: ${props => props.theme.neutrals55};
    z-index: 1;
`;

export const LeaseContractOverviewDiagram: React.FC<LeaseContractOverviewDiagramProps> = ({
    contractTotal,
    contractUsedTotal,
    contractPendingTotal,
}) => {
    const onePercentValue = contractTotal / 100;
    const usedPercentage = contractUsedTotal / onePercentValue;
    const pendingPercentage = contractPendingTotal / onePercentValue;
    const availablePercentage = 100 - usedPercentage - pendingPercentage;

    return (
        <DiagramContainer
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <UsedPercentageBar
                width={usedPercentage}
                title={contractUsedTotal + ' used.'}
                aria-valuenow={usedPercentage}
                data-testid="used-percentage-bar"
            />
            <PendingPercentageBar
                width={pendingPercentage}
                title={contractPendingTotal + ' pending.'}
                aria-valuenow={pendingPercentage}
                data-testid="pending-percentage-bar"
            />
            <AvailablePercentageBar
                width={availablePercentage}
                title={
                    contractTotal -
                    (contractUsedTotal + contractPendingTotal) +
                    ' available.'
                }
                aria-valuenow={availablePercentage}
                data-testid="available-percentage-bar"
            />
        </DiagramContainer>
    );
};

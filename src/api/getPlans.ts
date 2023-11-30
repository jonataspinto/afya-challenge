import { ParsedUrlQuery } from 'querystring';
import { HttpClient } from './clients/httpClient';
import { GetServerSidePropsContext, PreviewData } from 'next';

type GetPlansServerArgs = {
  pageContext: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>;
};

export const getPlansServer = async ({ pageContext }: GetPlansServerArgs) => {
  const protocol = pageContext?.req?.headers?.['x-forwarded-proto'];
  const host = pageContext?.req?.headers?.host;
  const requester = new HttpClient(`${protocol}://${host}/api`);

  return requester.get<PlanDTO[]>('/offer');
};

export const getPlans = async () => {
  const requester = new HttpClient('/api');

  return requester.get<PlanDTO[]>('/offer');
};

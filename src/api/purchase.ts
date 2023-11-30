import { GetServerSidePropsContext, PreviewData } from 'next';
import { HttpClient } from './clients/httpClient';
import { ParsedUrlQuery } from 'querystring';

export const purchase = async (body: PurchaseBody) => {
  const requester = new HttpClient('/api');

  return requester.post<PurchaseResponse>('/subscription', body);
};

export const getPurchaseData = async (id: string) => {
  const requester = new HttpClient('/api');

  return requester.get<PurchaseResponse>(`/subscription/${id}`);
};

type GetPurchaseDataServerArgs = {
  id: string | string[];
  pageContext?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>;
};

export const getPurchaseDataServer = async ({
  id,
  pageContext,
}: GetPurchaseDataServerArgs) => {
  const protocol = pageContext?.req?.headers?.['x-forwarded-proto'];
  const host = pageContext?.req?.headers?.host;
  const requester = new HttpClient(`${protocol}://${host}/api`);

  return requester.get<PurchaseResponse>(`/subscription/${id}`);
};

// Escapes "<" so data can never close the script tag early.
export default function JsonLd({json}: {json: string}) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: json.replace(/</g, '\\u003c')}} />;
}

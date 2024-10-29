import { ItemMenu } from './(component)/item-menu';

export default function Home() {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '275px',
                    height: '275px',
                    borderRadius: '50%',
                    padding: 40,
                    border: '1px solid black',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <ItemMenu
                        content='Welcome to'
                        type='content'
                        style={{ paddingInline: '40px' }}
                    />
                    <ItemMenu
                        content='Go to Form'
                        type='link'
                        href='/form'
                        style={{
                            marginTop: 20,
                            paddingInline: '10px',
                            textDecoration: 'none',
                        }}
                    />
                    <ItemMenu
                        content='Social Tracker'
                        type='content'
                        style={{ marginTop: 20, paddingInline: '40px' }}
                    />
                </div>
            </div>
        </div>
    );
}
